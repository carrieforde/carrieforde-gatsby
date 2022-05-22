import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import React from "react";
import MergeField from "components/MergeField/MergeField";
import { CallOutProps } from "./CallOut.interface";
import { callOut, icon } from "./Callout.module.css";
import { AlertLevel } from "entities/alertLevel";

export const ICON_MAP: Record<AlertLevel, IconName> = {
  info: "info-circle",
  tip: "lightbulb-exclamation",
  warning: "exclamation-circle",
  danger: "exclamation-triangle",
};

const CallOut: React.FC<CallOutProps> = ({ type, text, children }) => {
  const classes = cn(callOut, type);

  return (
    <div className={classes}>
      {type && (
        <FontAwesomeIcon icon={["fal", ICON_MAP[type]]} className={icon} />
      )}
      <p>
        {text && <MergeField text={text} />}
        {children}
      </p>
    </div>
  );
};

export default CallOut;
