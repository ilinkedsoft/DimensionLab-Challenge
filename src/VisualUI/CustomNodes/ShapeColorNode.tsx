import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { useAttribute } from "../../context/AttributeContext";
import { CustomNodeData } from "../types";

const ShapeColorNode = ({
  data
}: NodeProps) => {
  const { title } = data as CustomNodeData;
  const { changeColor, color } = useAttribute();
  return (
    <div className='customnode-container' data-testid='colornode'>
      <b>{title}</b>
      <hr />
      <label htmlFor="color">Select color:&nbsp;&nbsp;</label>
      <input type="color" value={color} name="shapecolor" id='color' onChange={(e) => changeColor(e.target.value)}/>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={false}
      />
    </div>
  );
};

ShapeColorNode.displayName = "ShapeColorNode";

export default memo(ShapeColorNode);
