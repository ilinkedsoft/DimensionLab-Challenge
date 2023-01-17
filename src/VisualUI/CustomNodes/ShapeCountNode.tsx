import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { useAttribute } from "../../context/AttributeContext";
import { CustomNodeData } from "../types";

const ShapeCountNode = ({
  data
}: NodeProps) => {
  const { title } = data as CustomNodeData;
  const { changeCount, count } = useAttribute();
  return (
    <div className='customnode-container' data-testid='countnode'>
      <b>{title}</b>
      <hr />
      <label htmlFor="count">Select number:&nbsp;&nbsp;</label>
      <input type="number" value={count} min="1" max="100" name="shapecount" id='count' onChange={(e) => changeCount(Number(e.target.value))} className='nodrag'/>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={false}
      />
    </div>
  );
};

ShapeCountNode.displayName = "ShapeCountNode";

export default memo(ShapeCountNode);
