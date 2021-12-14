import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function Camera(props) {
  const ref = useRef(null);
  const three = useThree();

  useEffect(() => {
    if (ref.current) {
      three.camera = ref.current;
    }
  }, [ref, three]);

  return (
    <perspectiveCamera ref={ref} {...props} />
  );
}

export {
  Camera
};
