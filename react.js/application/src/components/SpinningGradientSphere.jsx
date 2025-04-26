import { useSpring, animated } from '@react-spring/web';

function SpinningGradientSphere() {
  const styles = useSpring({
    loop: true,
    from: { rotate: 0 },
    to: { rotate: 360 },
    config: { duration: 1000 },
  });

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <animated.div
        style={{
          width: 150,
          height: 150,
          borderRadius: '9999px',
          background: 'linear-gradient(45deg, #00DBDE, #FC00FF)',
          backgroundSize: '200% 200%',
          transform: styles.rotate.to((r) => `rotate(${r}deg)`),
          boxShadow: '0 0 50px #00DBDE',
        }}
      />
    </div>
  );
}

export default SpinningGradientSphere;
