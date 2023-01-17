import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { useAttribute } from "../../context/AttributeContext";
import { CustomNodeData } from "../types";

const ShapeTypeNode = ({
  data
}: NodeProps) => {
  const { title } = data as CustomNodeData;
  const { changeType, type } = useAttribute();
  return (
    <div className='customnode-container' data-testid='typenode'>
      <b>{title}</b>
      <hr />
      <input type='radio' id='cube' name='shapetype' value='cube' checked={type === 'cube'} onClick={() => changeType('cube')}/>
      <label htmlFor='cube'>Cube</label>
      <input type='radio' id='pyramid' name='shapetype' value='pyramid' checked={type === 'pyramid'} onClick={() => changeType('pyramid')}/>
      <label htmlFor='pyramid'>Pyramid</label>
      <input type='radio' id='sphere' name='shapetype' value='sphere' checked={type === 'sphere'} onClick={() => changeType('sphere')}/>
      <label htmlFor='sphere'>Sphere</label>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={false}
      />
    </div>
  );
};

ShapeTypeNode.displayName = "ShapeTypeNode";

export default memo(ShapeTypeNode);
