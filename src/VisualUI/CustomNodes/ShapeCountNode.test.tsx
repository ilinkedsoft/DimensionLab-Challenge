import { render, renderHook, screen } from "@testing-library/react";
import AttributeProvider, { useAttributeOptions } from "../../context/AttributeContext";
import ShapeCountNode from "./ShapeCountNode";
import { ReactFlowProvider } from 'reactflow';

describe("ShapeCountNode component test", () => {
  test("Render <ShapeCountNode>", () => {
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
          <ShapeCountNode {...props} />
        </ReactFlowProvider>
      </AttributeProvider>
    );
    expect(screen.getByTestId("countnode")).toBeInTheDocument();
  });
});
