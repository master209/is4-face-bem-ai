import { useEffect, useState } from 'react';

export function useSingleOrDoubleClick(
  handleSingleClick: () => void,
  handleDoubleClick: () => void,
  // ev: MouseEvent,
  delay = 250,
) {
  const [click, setClick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (click === 1) {
        handleSingleClick();
      }
      setClick(0);
    }, delay);

    if (click === 2) {
      handleDoubleClick();
    }

    return () => clearTimeout(timer);

  }, [click, handleSingleClick, handleDoubleClick, delay]);

  return () => setClick((prev) => prev + 1);
}
