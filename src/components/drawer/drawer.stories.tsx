import type { Meta } from "@storybook/react";
import * as React from "react";

import Drawer from "./drawer";

export default {
  title: "Drawer",
  component: Drawer,
} as Meta;

export const RightDrawer = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = React.useCallback(
    () => setIsOpen((prevState) => !prevState),
    []
  );
  const handleClose = React.useCallback(() => setIsOpen(false), []);

  return (
    <div style={{ height: "150vh" }}>
      <button onClick={handleToggle} ref={buttonRef}>
        Open Drawer
      </button>
      <Drawer buttonRef={buttonRef} isOpen={isOpen} onClose={handleClose}>
        Drawer Contents
      </Drawer>
    </div>
  );
};
