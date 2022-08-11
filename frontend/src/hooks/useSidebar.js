import { useState } from "react";

export const useSidebar = (show = true) => {
  const [showSidebar, setShowSidebar] = useState(show);

  const handleSidebar = () => {
    setShowSidebar(!show);
  };

  return handleSidebar, showSidebar;
};
