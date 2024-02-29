import cn from "classnames";
import Typography from "components/typography/typography";
import * as React from "react";
import { createPortal } from "react-dom";

import * as s from "./drawer.module.css";

export type DrawerProps = {
  /**
   * Button Ref is needed to return focus to the button.
   */
  buttonRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({
  children,
  isOpen,
  onClose,
  buttonRef,
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const classes = cn(s.drawer, s.left, {
    [s.open]: isOpen,
  });
  const [drawerWidth, setDrawerWidth] = React.useState<number | undefined>();

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keyup", handleEsc);

    return () => {
      document.removeEventListener("keyup", handleEsc);
    };
  }, []);

  React.useEffect(() => {
    if (window.innerWidth >= 400) {
      setDrawerWidth(400);
    } else {
      setDrawerWidth(window.innerWidth);
    }
  }, []);

  React.useEffect(() => {
    const htmlClasses = document.documentElement.classList;

    if (isOpen) {
      htmlClasses.add(s.drawerNoScroll);
    } else if (htmlClasses.contains(s.drawerNoScroll)) {
      htmlClasses.remove(s.drawerNoScroll);
    }

    return () => {
      htmlClasses.remove(s.drawerNoScroll);
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.focus();
    }

    return () => {
      buttonRef?.current?.focus();
    };
  }, [isOpen]);

  return createPortal(
    <div
      className={classes}
      style={{
        "--drawer-width": `${drawerWidth}px`,
      }}
    >
      <button className={s.button} onClick={onClose} type="button">
        <Typography component="span" variant="subtitle">
          &times;
        </Typography>
      </button>
      <div ref={contentRef} tabIndex={isOpen ? -1 : undefined}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Drawer;
