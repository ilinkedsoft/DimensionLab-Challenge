import ReactFlow, {
  Node,
  Background,
  Edge,
  useNodesState,
  useEdgesState
} from "reactflow";

import MainNode from "./CustomNodes/MainNode";

import "reactflow/dist/style.css";

import './VisualUI.css';
import ShapeTypeNode from "./CustomNodes/ShapeTypeNode";
import ShapeColorNode from "./CustomNodes/ShapeColorNode";
import ShapeCountNode from "./CustomNodes/ShapeCountNode";
import ShapeZoomNode from "./CustomNodes/ShapeZoomNode";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "shapetype",
    data: { title: "SHAPE TYPE" },
    position: { x: 100, y: 100 }
  },
  { 
    id: "2",
    type: "shapecolor", 
    data: { title: "SHAPE COLOR" }, 
    position: { x: 100, y: 250 } 
  },
  { 
    id: "3",
    type: "shapecount", 
    data: { title: "NUMBER OF INSTANCES" }, 
    position: { x: 100, y: 400 } 
  },
  { 
    id: "4",
    type: "shapezoom", 
    data: { title: "ZOOM LEVEL" }, 
    position: { x: 100, y: 550 } 
  },
  {
    id: "5",
    type: "main",
    data: { title: "OUTPUT" },
    position: { x: 600, y: 250 }
  }
];

const initialEdges: Edge[] = [
  { id: "e1-5", source: "1", target: "5", animated: true },
  { id: "e2-5", source: "2", target: "5", animated: true },
  { id: "e3-5", source: "3", target: "5", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
];

const nodeTypes = {
  main: MainNode,
  shapetype: ShapeTypeNode,
  shapecolor: ShapeColorNode,
  shapecount: ShapeCountNode,
  shapezoom: ShapeZoomNode,
};

const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
    >
      <Background />
    </ReactFlow>
  );
};

export default BasicFlow;