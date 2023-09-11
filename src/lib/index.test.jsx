import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";
import { Editor } from "./index";

describe("Editor", () => {
  test("Editor component renders correctly", () => {
    const component = renderer.create(<Editor />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
