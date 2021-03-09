import { ExtractedMergeField } from './MergeField.interface';
import { get as _get } from 'lodash';
import { KeyValue } from '../../interfaces/KeyValue.type';

export const MERGE_FIELD_REGEX = new RegExp(
  /{{[\w.]+(\|[\w\s!@#$%^&*()-_=+[{|}\]\\;:'",<.>/?`~]+)?}}/g
);

export function searchContent(text: string): boolean {
  return text.search(MERGE_FIELD_REGEX) >= 0;
}

export function extractMergeField(text: string): ExtractedMergeField {
  const start = text.indexOf('{{');
  const end = text.indexOf('}}');
  const field = text.substring(start + 2, end);
  const pipe = field.indexOf('|');
  const fieldName = field.includes('|') ? field.substring(0, pipe) : field;
  const defaultValue = field.includes('|')
    ? field.substring(pipe + 1, field.length)
    : undefined;

  return {
    search: `{{${field}}}`,
    fieldName,
    defaultValue,
  };
}

export function processMergeField(text: string, data: KeyValue): string {
  const { search, fieldName, defaultValue } = extractMergeField(text);
  const value = _get(data, fieldName, defaultValue);

  if (!search || !fieldName) {
    return text;
  }

  if (!value) {
    return text
      .replace(search, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  return text.replace(search, value);
}
