import { render, renderHook, screen } from "@testing-library/react";
import AttributeProvider, { useAttributeOptions } from "../../context/AttributeContext";
import ShapeZoomNode from "./ShapeZoomNode";
import { ReactFlowProvider } from 'reactflow';

describe("ShapeZoomNode component test", () => {
  test("Render <ShapeZoomNode>", () => {
    const { result } = renderHook(useAttributeOptions);
    const props = {
      data: { title: '' },
      id: '',
      selected: false,
      type: '',
      zIndex: 0,
      isConnectable: false,
      xPos: 0,
      yPos: 0,
      dragging: false,
    }

    render(
      <AttributeProvider {...result.current}>
        <ReactFlowProvider>
          <ShapeZoomNode {...props} />
        </ReactFlowProvider>
      </AttributeProvider>
    );
    expect(screen.getByTestId("zoomnode")).toBeInTheDocument();
  });
});
