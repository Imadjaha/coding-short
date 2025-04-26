import { useSpring, animated } from '@react-spring/web';

function AuroraWavesBackground() {
  const styles = useSpring({
    loop: true,
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 2000 },
  });

  return (
    <div className="h-screen w-full overflow-hidden">
      <animated.div
        style={{
          ...styles,
          backgroundImage: 'linear-gradient(270deg, #00DBDE, #FC00FF)',
          backgroundSize: '400% 400%',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

export default AuroraWavesBackground;
