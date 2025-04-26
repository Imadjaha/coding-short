import { useSpring, animated } from '@react-spring/web';

function ColorChangingBall() {
  const styles = useSpring({
    loop: true,
    from: { background: 'linear-gradient(to right, #ff7e5f, #feb47b)' },
    to: { background: 'linear-gradient(to right, #6a11cb, #2575fc)' },
    config: { duration: 1000 },
  });

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <animated.div
        style={{
          ...styles,
          width: 150,
          height: 150,
          borderRadius: '9999px',
          boxShadow: '0 0 40px rgba(255,255,255,0.5)',
        }}
      />
    </div>
  );
}

export default ColorChangingBall;
