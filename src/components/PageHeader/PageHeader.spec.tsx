import React from 'react';
import { render } from '@testing-library/react';
import { Default, WithUpdate } from './PageHeader.stories';

describe('PageHeader', () => {
  const getComponentPieces = (container: HTMLElement) => {
    const category = container.querySelector('.category');
    const pageDesc = container.querySelector('.pageDescription');
    const timeStamp = container.querySelector('.timeStamp');
    const updated = container.querySelector('.timeStampUpdated');

    return { category, pageDesc, timeStamp, updated };
  };

  it('should render just a title', () => {
    const { container } = render(<Default {...Default.args} />);
    const { category, pageDesc, timeStamp, updated } =
      getComponentPieces(container);
    expect(category).toBeNull();
    expect(pageDesc).toBeNull();
    expect(timeStamp).toBeNull();
    expect(updated).toBeNull();
  });

  it('should render all pieces', () => {
    const { container } = render(<WithUpdate {...WithUpdate.args} />);
    const { category, pageDesc, timeStamp, updated } =
      getComponentPieces(container);
    expect(category).toBeTruthy();
    expect(pageDesc).toBeTruthy();
    expect(timeStamp).toBeTruthy();
    expect(updated).toBeTruthy();
  });
});
