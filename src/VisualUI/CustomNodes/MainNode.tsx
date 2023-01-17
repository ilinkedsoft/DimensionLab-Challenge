import { memo, useLayoutEffect, useMemo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { Canvas, useThree } from '@react-three/fiber'
import { Box } from "../Shapes/Box";
import { CustomNodeData } from "../types";
import { useAttribute } from "../../context/AttributeContext";
import { Pyramid } from "../Shapes/Pyramid";
import { Sphere } from "../Shapes/Sphere";

const CameraControl = ({zoom}: {zoom: number}) => {
  const { camera } = useThree();
  useLayoutEffect(() => {
    camera.position.setZ((100 - zoom) / 10);
  }, [zoom]);
  return null;
};

const shapes = {
  cube: Box,
  pyramid: Pyramid,
  sphere: Sphere,
};

const MainNode = ({
  data
}: NodeProps) => {
  const { title } = data as CustomNodeData;
  const { color, count, zoom, type } = useAttribute();
  const objPositions = useMemo(() => 
    (Array(count).fill(0).map(() => [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5])),
    [count]
  );
  const Component = shapes[type];
  return (
    <div className='customnode-container' style={{width: 400, height: 300}} >
      <b>{title}</b>
      <hr />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={false}
      />
      <Canvas>
        <CameraControl zoom={zoom} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {
          objPositions.map(([x, y, z], index) => (
            <Component position={[x, y, z]} color={color} key={index}/>
          ))
        }
      </Canvas>
    </div>
  );
};

MainNode.displayName = "MainNode";

export default memo(MainNode);
