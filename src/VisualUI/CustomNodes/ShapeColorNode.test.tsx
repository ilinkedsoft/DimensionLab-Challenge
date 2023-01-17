import { render, renderHook, screen } from "@testing-library/react";
import AttributeProvider, { useAttributeOptions } from "../../context/AttributeContext";
import ShapeColorNode from "./ShapeColorNode";
import { ReactFlowProvider } from 'reactflow';

describe("ShapeColorNode component test", () => {
  test("Render <ShapeColorNode>", () => {
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
          <ShapeColorNode {...props} />
        </ReactFlowProvider>
      </AttributeProvider>
    );
    expect(screen.getByTestId("colornode")).toBeInTheDocument();
  });
});
