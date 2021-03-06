// export const MERGE_FIELD_REGEX = new RegExp(
//   /{{[\w_]+(\|[\w\s!@#$%^&*()-_=+[{}\]|\\;:'",./<>?`~]+)?}}/g
// );

import { ExtractedMergeField } from './MergeField.interface';
import { get as _get } from 'lodash';
import { KeyValue } from '../../interfaces/KeyValue.type';

export const MERGE_FIELD_REGEX = new RegExp(/{{[\w.]+}}/g);

export function searchContent(text: string): boolean {
  return text.search(MERGE_FIELD_REGEX) >= 0;
}

export function extractMergeField(text: string): ExtractedMergeField {
  const start = text.indexOf('{{');
  const end = text.indexOf('}}');
  const fieldName = text.substring(start + 2, end);

  return {
    search: `{{${fieldName}}}`,
    fieldName,
  };
}

export function processMergeField(text: string, data: KeyValue): string {
  const { search, fieldName } = extractMergeField(text);
  // const value = _get(data, fieldName, '');

  if (!search || !fieldName) {
    return text;
  }

  if (!data || !data[fieldName]) {
    return text.replace(`${search} `, '');
  }

  return text.replace(search, data[fieldName]);
}
