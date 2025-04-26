import { useSpring, animated } from '@react-spring/web';

function FlashingTextGradient() {
  const styles = useSpring({
    loop: true,
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 1000 },
  });

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <animated.h1
        style={{
          backgroundImage: 'linear-gradient(270deg, #ff6ec4, #7873f5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundSize: '200% 200%',
          ...styles,
        }}
        className="text-6xl font-extrabold"
      >
        Flash Text
      </animated.h1>
    </div>
  );
}

export default FlashingTextGradient;
