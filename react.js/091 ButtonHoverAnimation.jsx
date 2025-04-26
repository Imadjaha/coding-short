import { useSpring, animated } from '@react-spring/web';

function ButtonHoverAnimation() {
  const [hoverStyle, setHoverStyle] = useSpring(() => ({
    scale: 1,
  }));

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <animated.button
        style={hoverStyle}
        onMouseEnter={() => setHoverStyle.start({ scale: 1.2 })}
        onMouseLeave={() => setHoverStyle.start({ scale: 1 })}
        className="px-8 py-4 bg-blue-500 text-white rounded-lg shadow-lg text-xl"
      >
        Hover me
      </animated.button>
    </div>
  );
}

export default ButtonHoverAnimation;
