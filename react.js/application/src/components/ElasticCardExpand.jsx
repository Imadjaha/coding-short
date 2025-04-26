import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

function ElasticCardExpand() {
  const [open, setOpen] = useState(false);
  const [style, api] = useSpring(() => ({ scale: 1 }));

  const toggle = () => {
    setOpen(!open);
    api.start({ scale: open ? 1 : 1.2 });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <animated.div
        onClick={toggle}
        style={{ transform: style.scale.to((s) => `scale(${s})`) }}
        className="w-64 h-80 bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-2xl font-semibold cursor-pointer"
      >
        Tap Me
      </animated.div>
    </div>
  );
}

export default ElasticCardExpand;
