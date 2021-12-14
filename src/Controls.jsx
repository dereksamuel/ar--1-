import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

function Controls(props) {
  const ref = useRef(null);
  const { invalidate, camera, gl } = useThree();

  useEffect(() => {
    ref.current.addEventListener('change', invalidate)
    return () => ref.current.removeEventListener('change', invalidate) //FIXME: fix on the future change controls when playing video
  }, []);

  return (
    <orbitControls ref={ref} args={[camera, gl.domElement]} />
  );
}

export {
  Controls
};
