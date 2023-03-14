import React from "react";

export default function useIsMobileNavOpened() {
  const [isMobileNavOpened, setIsMobileNavOpened] = React.useState(false);

  function toggleMobileNavState() {
    setIsMobileNavOpened(actualState => !actualState);
  }

  return {
    isMobileNavOpened,
    toggleMobileNavState
  };
}