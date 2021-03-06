import { render } from '@testing-library/react';
import React from 'react';
import MergeField from './MergeField';
import MergeFieldProvider from './MergeField.context';
import { ExtractedMergeField, MergeFieldProps } from './MergeField.interface';
import {
  extractMergeField,
  processMergeField,
  searchContent,
} from './MergeField.utils';

const extracted: ExtractedMergeField = {
  search: '{{animal}}',
  fieldName: 'animal',
};

const data = {
  animal: 'turtle',
  address: {
    city: 'San Francisco',
    state: 'California',
  },
};

describe('searchContent', () => {
  it('should determine whether a merge field is present', () => {
    expect(searchContent('')).toBeFalsy();
    expect(searchContent('{{animal}}')).toBeTruthy();
    expect(searchContent('i like turtles')).toBeFalsy();
    expect(searchContent('i like {{animal}}s')).toBeTruthy();
    expect(searchContent('<p>i like {{animal}}s</p>')).toBeTruthy();
    expect(searchContent('{{address.city}}')).toBeTruthy();
  });
});

describe('extractMergeField', () => {
  it('should return an object with the merge field (search) and the field name', () => {
    expect(extractMergeField('{{animal}}')).toEqual(extracted);
    expect(extractMergeField('i like {{animal}}s')).toEqual(extracted);
    expect(extractMergeField('<p>i like {{animal}}s</p>')).toEqual(extracted);
    expect(extractMergeField('{{address.city}}')).toEqual({
      search: '{{address.city}}',
      fieldName: 'address.city',
    });
  });
});

describe('processMergeField', () => {
  it('should replace the merge field with the correct value', () => {
    expect(processMergeField('i make websites', data)).toEqual(
      'i make websites'
    );
    expect(processMergeField('i make {{adjective}} websites', data)).toEqual(
      'i make websites'
    );
    expect(processMergeField('i like {{animal}}s', data)).toEqual(
      `i like ${data.animal}s`
    );
    expect(processMergeField('<p>i like {{animal}}s</p>', data)).toEqual(
      `<p>i like ${data.animal}s</p>`
    );
    // expect(
    //   processMergeField('i left my heart in {{address.city}}', data)
    // ).toEqual(`i left my heart in ${data.address.city}`);
    // expect(processMergeField('Hello {{firstName}}', {})).toEqual('Hello');
  });
});

describe('MergeField', () => {
  const wrapper = ({ children }: any) => (
    <MergeFieldProvider data={data}>{children}</MergeFieldProvider>
  );
  const getComponentUnderTest = ({ text }: MergeFieldProps) =>
    render(<MergeField text={text} />, {
      wrapper,
    });

  it('should return the text with no change', () => {
    const { container } = getComponentUnderTest({ text: 'i make websites' });
    expect(container.textContent).toEqual('i make websites');
  });

  it('should replace a merge field without data', () => {
    const { container } = getComponentUnderTest({
      text: 'i make {{adjective}} websites',
    });
    expect(container.textContent).toEqual('i make websites');
  });

  it('should correctly render a merge field in a regular string', () => {
    const { container } = getComponentUnderTest({ text: 'i like {{animal}}s' });
    expect(container.textContent).toEqual(`i like ${data.animal}s`);
  });

  it('should correctly render a merge field with markup', () => {
    const { container } = getComponentUnderTest({
      text: '<p>i like {{animal}}s</p>',
    });
    expect(container.textContent).toEqual(`<p>i like ${data.animal}s</p>`);
  });
});
