import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

function MagneticButtonAttraction() {
  const [style, api] = useSpring(() => ({ x: 0, y: 0 }));

  return (
    <div
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        api.start({ x: (clientX - window.innerWidth/2)/20, y: (clientY - window.innerHeight/2)/20 });
      }}
      onMouseLeave={() => api.start({ x: 0, y: 0 })}
      className="h-screen flex justify-center items-center bg-black"
    >
      <animated.button
        style={style}
        className="bg-red-500 px-10 py-5 rounded-full text-white text-xl font-bold shadow-lg"
      >
        Magnetic
      </animated.button>
    </div>
  );
}

export default MagneticButtonAttraction;
