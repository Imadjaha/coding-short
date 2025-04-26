import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

function CardFlipAnimation() {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <div onClick={() => setFlipped(!flipped)} className="cursor-pointer">
        <animated.div
          className="absolute w-64 h-80 bg-blue-500 text-white flex justify-center items-center rounded-lg shadow-lg text-3xl"
          style={{ opacity: opacity.to(o => 1 - o), transform }}
        >
          Front
        </animated.div>
        <animated.div
          className="absolute w-64 h-80 bg-red-500 text-white flex justify-center items-center rounded-lg shadow-lg text-3xl"
          style={{
            opacity,
            transform,
            rotateY: '180deg',
          }}
        >
          Back
        </animated.div>
      </div>
    </div>
  );
}

export default CardFlipAnimation;
