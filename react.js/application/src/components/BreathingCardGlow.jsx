import { useSpring, animated } from '@react-spring/web';

function BreathingCardGlow() {
  const glow = useSpring({
    loop: { reverse: true },
    from: { boxShadow: '0 0 20px #00f' },
    to: { boxShadow: '0 0 60px #00f' },
    config: { duration: 1000 },
  });

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <animated.div
        style={glow}
        className="w-64 h-80 bg-gradient-to-tr from-indigo-500 to-purple-700 rounded-3xl"
      />
    </div>
  );
}

export default BreathingCardGlow;
