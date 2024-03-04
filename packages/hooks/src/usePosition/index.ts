import React from 'react';

export default function usePosition() {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const onMouseMove = (event: MouseEvent) => {
    setPos({ x: event.pageX, y: event.pageY });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return pos;
}
