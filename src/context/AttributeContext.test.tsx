import { render, renderHook, screen } from "@testing-library/react";
import AttributeProvider, { useAttributeOptions } from "./AttributeContext";
import VisualUI from "../VisualUI";

describe("AttributeContext test", () => {
  test("AttributeProvider shows default value", () => {
    const { result } = renderHook(useAttributeOptions);
    render(
      <AttributeProvider {...result.current}>
        <VisualUI />
      </AttributeProvider>
    );
    const colorNode = screen.getByTestId("colornode");
    const countNode = screen.getByTestId("countnode");
    const typeNode = screen.getByTestId("typenode");
    const zoomNode = screen.getByTestId("zoomnode");
    const shapeColorInput = colorNode.getElementsByTagName("input")[0];
    const shapeCountInput = countNode.getElementsByTagName("input")[0];
    const shapeTypeInput = typeNode.getElementsByTagName("input")[0];
    const shapeZoomInput = zoomNode.getElementsByTagName("input")[0];

    expect(shapeColorInput.value).toBe(result.current.color);
    expect(Number(shapeCountInput.value)).toBe(result.current.count);
    expect(shapeTypeInput.checked).toBe(true);
    expect(Number(shapeZoomInput.value)).toBe(result.current.zoom);
  });
});
