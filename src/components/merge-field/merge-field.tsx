import parse from "html-react-parser";
import * as React from "react";

const MERGE_FIELD_REGEX = new RegExp(/{{[\w.]+(\|.+)?}}/g);

// Determine whether a merge field exists in a sea of text.
function searchContent(text: string) {
  return text.search(MERGE_FIELD_REGEX) >= 0;
}

function extractMergeField(text: string) {
  const start = text.indexOf("{{");
  const end = text.indexOf("}}");
  const field = text.substring(start + 2, end);
  const pipe = field.indexOf("|");
  const fieldName = field.includes("|") ? field.substring(0, pipe) : field;
  const defaultValue = field.includes("|")
    ? field.substring(pipe + 1, field.length)
    : undefined;

  return {
    search: `{{${field}}}`,
    fieldName,
    defaultValue,
  };
}

function processMergeField(text: string, data: Record<string, any>): string {
  const { search, fieldName, defaultValue } = extractMergeField(text);
  const value = data?.[fieldName] ?? defaultValue;

  if (!search || !fieldName) {
    return text;
  }

  if (!value) {
    return text
      .replace(search, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  return text.replace(search, value);
}

type MergeFieldContextProps = Record<string, any>;

type MergeFieldProviderProps = {
  data: Record<string, any>;
};

const MergeFieldContext = React.createContext<MergeFieldContextProps>({});

export const MergeFieldProvider: React.FC<
  React.PropsWithChildren<MergeFieldProviderProps>
> = ({ children, data }) => {
  const memoizedContextValue = React.useMemo(() => data, []);

  return (
    <MergeFieldContext.Provider value={memoizedContextValue}>
      {children}
    </MergeFieldContext.Provider>
  );
};

const useMergeField = () => {
  const data = React.useContext(MergeFieldContext);

  if (!data) {
    throw new Error(
      "`MergeField` can only be used within a `MergeFieldContext`!"
    );
  }

  return data;
};

export type MergeFieldProps = {
  text: string;
};

export const MergeField: React.FC<MergeFieldProps> = ({ text }) => {
  const data = useMergeField();
  const processed = processMergeField(text, data);

  if (searchContent(processed)) {
    return <MergeField text={processed} />;
  }

  return <>{parse(processed)}</>;
};

export default MergeField;
