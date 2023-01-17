import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { ShapeProp } from "./types";

export function Pyramid(props: ShapeProp) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  useFrame((_, delta) => (ref.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <coneGeometry args={[1, 3, 10]} />
      <meshStandardMaterial color={hovered ? "hotpink" : props.color} />
    </mesh>
  );
}
