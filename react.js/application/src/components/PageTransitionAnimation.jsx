import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function PageTransitionAnimation() {
  const [show, setShow] = useState(true);
  const transitions = useTransition(show, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-50%)' },
  });

  return (
    <div className="flex h-screen justify-center items-center bg-gray-300">
      <button
        onClick={() => setShow(!show)}
        className="absolute top-10 right-10 px-6 py-2 bg-black text-white rounded-md"
      >
        Toggle Page
      </button>
      {transitions((style, item) =>
        item ? (
          <animated.div style={style} className="w-96 h-96 bg-green-400 flex justify-center items-center text-2xl rounded-lg">
            Page 1
          </animated.div>
        ) : (
          <animated.div style={style} className="w-96 h-96 bg-purple-400 flex justify-center items-center text-2xl rounded-lg">
            Page 2
          </animated.div>
        )
      )}
    </div>
  );
}

export default PageTransitionAnimation;
