import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

function DraggableBall() {
  const [style, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [x, y] }) => {
    api.start({ x, y });
  });

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-300 to-blue-400 overflow-hidden">
      <animated.div
        {...bind()}
        style={{ ...style }}
        className="w-20 h-20 bg-yellow-500 rounded-full shadow-2xl cursor-grab"
      />
    </div>
  );
}

export default DraggableBall;
