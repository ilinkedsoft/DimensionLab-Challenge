import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { useAttribute } from "../../context/AttributeContext";
import { CustomNodeData } from "../types";

const ShapeZoomNode = ({
  data
}: NodeProps) => {
  const { title } = data as CustomNodeData;
  const { changeZoom, zoom } = useAttribute();
  return (
    <div className='customnode-container' data-testid='zoomnode'>
      <b>{title}</b>
      <hr />
      <input type="range" value={zoom} min="1" max="100" name="shapezoom" id='zoom' onChange={(e) => changeZoom(Number(e.target.value))} className='nodrag'/>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={false}
      />
    </div>
  );
};

ShapeZoomNode.displayName = "ShapeZoomNode";

export default memo(ShapeZoomNode);
