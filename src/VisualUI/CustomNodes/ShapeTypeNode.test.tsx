import { render, renderHook, screen } from "@testing-library/react";
import AttributeProvider, { useAttributeOptions } from "../../context/AttributeContext";
import ShapeTypeNode from "./ShapeTypeNode";
import { ReactFlowProvider } from 'reactflow';

describe("ShapeTypeNode component test", () => {
  test("Render <ShapeTypeNode>", () => {
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
          <ShapeTypeNode {...props} />
        </ReactFlowProvider>
      </AttributeProvider>
    );
    expect(screen.getByTestId("typenode")).toBeInTheDocument();
  });
});
