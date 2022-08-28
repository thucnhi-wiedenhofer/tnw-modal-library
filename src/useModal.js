import { useState } from 'react';

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const reload = () => window.location.reload();
  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    reload
  };
};
