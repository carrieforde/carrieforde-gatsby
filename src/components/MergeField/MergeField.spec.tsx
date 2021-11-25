import { render } from "@testing-library/react";
import React from "react";
import MergeField from "./MergeField";
import MergeFieldProvider from "./MergeField.context";
import { ExtractedMergeField, MergeFieldProps } from "./MergeField.interface";
import {
  extractMergeField,
  processMergeField,
  searchContent,
} from "./MergeField.utils";

const extracted: ExtractedMergeField = {
  search: "{{animal}}",
  fieldName: "animal",
};

const data = {
  animal: "turtle",
  address: {
    city: "San Francisco",
    state: "California",
  },
  ingredient1: "PB",
  ingredient2: "J",
};

describe("searchContent", () => {
  it("should determine whether a merge field is present", () => {
    expect(searchContent("")).toBeFalsy();
    expect(searchContent("{{animal}}")).toBeTruthy();
    expect(searchContent("i like turtles")).toBeFalsy();
    expect(searchContent("i like {{animal}}s")).toBeTruthy();
    expect(searchContent("<p>i like {{animal}}s</p>")).toBeTruthy();
    expect(searchContent("{{address.city}}")).toBeTruthy();
    expect(
      searchContent("I use {{technologies|React}} to build websites.")
    ).toBeTruthy();
    expect(
      searchContent(
        "I use {{technologies|HTML, CSS, Javascript}} to build websites."
      )
    ).toBeTruthy();
  });
});

describe("extractMergeField", () => {
  it("should return an object with the merge field (search) and the field name", () => {
    expect(extractMergeField("{{animal}}")).toEqual(extracted);
    expect(extractMergeField("i like {{animal}}s")).toEqual(extracted);
    expect(extractMergeField("<p>i like {{animal}}s</p>")).toEqual(extracted);
    expect(extractMergeField("{{address.city}}")).toEqual({
      search: "{{address.city}}",
      fieldName: "address.city",
    });
    expect(
      extractMergeField("I use {{technologies|React}} to build websites.")
    ).toEqual({
      search: "{{technologies|React}}",
      fieldName: "technologies",
      defaultValue: "React",
    });
    expect(
      extractMergeField(
        "I use {{technologies|HTML, CSS, Javascript}} to build websites."
      )
    ).toEqual({
      search: "{{technologies|HTML, CSS, Javascript}}",
      fieldName: "technologies",
      defaultValue: "HTML, CSS, Javascript",
    });
  });
});

describe("processMergeField", () => {
  it("should replace the merge field with the correct value", () => {
    expect(processMergeField("Hello {{firstName}}", {})).toEqual("Hello");
    expect(processMergeField("i make websites", data)).toEqual(
      "i make websites"
    );
    expect(processMergeField("i make {{adjective}} websites", data)).toEqual(
      "i make websites"
    );
    expect(processMergeField("i like {{animal}}s", data)).toEqual(
      `i like ${data.animal}s`
    );
    expect(processMergeField("<p>i like {{animal}}s</p>", data)).toEqual(
      `<p>i like ${data.animal}s</p>`
    );
    expect(
      processMergeField("I use {{technologies|React}} to build websites.", data)
    ).toEqual("I use React to build websites.");
    expect(
      processMergeField(
        "I use {{technologies|HTML, CSS, Javascript}} to build websites.",
        data
      )
    ).toEqual("I use HTML, CSS, Javascript to build websites.");
    expect(
      processMergeField("i left my heart in {{address.city}}", data)
    ).toEqual(`i left my heart in ${data.address.city}`);
  });
});

describe("MergeField", () => {
  const wrapper: React.FC = ({ children }) => (
    <MergeFieldProvider data={data}>{children}</MergeFieldProvider>
  );
  const getComponentUnderTest = ({ text }: MergeFieldProps) =>
    render(<MergeField text={text} />, {
      wrapper,
    });

  xit("should return the text with no change", () => {
    const { container } = getComponentUnderTest({ text: "i make websites" });
    expect(container.textContent).toEqual("i make websites");
  });

  xit("should replace a merge field without data", () => {
    const { container } = getComponentUnderTest({
      text: "i make {{adjective}} websites",
    });
    expect(container.textContent).toEqual("i make websites");
  });

  xit("should correctly render a merge field in a regular string", () => {
    const { container } = getComponentUnderTest({ text: "i like {{animal}}s" });
    expect(container.textContent).toEqual(`i like ${data.animal}s`);
  });

  xit("should correctly render a merge field with markup", () => {
    const { container } = getComponentUnderTest({
      text: "<p>i like {{animal}}s</p>",
    });
    expect(container.innerHTML).toEqual(`<p>i like ${data.animal}s</p>`);
  });

  it("should correctly render multiple merge fields", () => {
    const { container } = getComponentUnderTest({
      text: "i like {{ingredient1}} & {{ingredient2}} sandwiches",
    });
    expect(container.textContent).toEqual("i like PB & J sandwiches");
  });
});
