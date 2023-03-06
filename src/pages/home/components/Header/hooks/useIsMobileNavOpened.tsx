import React from "react";

export function useIsMobileNavOpened() {
  const [isMobileNavOpened, setIsMobileNavOpened] = React.useState(false);

  function toggleMobileNavState() {
    setIsMobileNavOpened(actualState => !actualState);
  }

  return {
    isMobileNavOpened,
    toggleMobileNavState
  };
}