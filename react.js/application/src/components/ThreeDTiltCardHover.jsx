import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

function ThreeDTiltCardHover() {
  const [props, set] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <animated.div
        className="w-80 h-96 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-2xl cursor-pointer"
        style={{
          transform: props.rotateX
            .to((x) => `perspective(600px) rotateX(${x}deg) rotateY(${props.rotateY.get()}deg) scale(${props.scale.get()})`)
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientY - rect.top - rect.height / 2) / 10;
          const y = (e.clientX - rect.left - rect.width / 2) / 10;
          set.start({ rotateX: -x, rotateY: y, scale: 1.05 });
        }}
        onMouseLeave={() => set.start({ rotateX: 0, rotateY: 0, scale: 1 })}
      >
        3D Card
      </animated.div>
    </div>
  );
}

export default ThreeDTiltCardHover;
