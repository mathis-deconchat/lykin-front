//Libraries
import { TypeOrFieldNameRegExp } from "@apollo/client/cache/inmemory/helpers";
import React from "react";

interface DividerProps {
  text?: string;
  lightTextColor?: string;
  darkTextColor?: string;
  lightBgColor?: string;
  darkBgColor?: string;
  lightColor: string;
  darkColor: string;
}

const Divider: React.FC<DividerProps> = ({
  lightColor,
  darkColor,
  text,
  lightTextColor,
  lightBgColor,
  darkBgColor,
  darkTextColor,
}) => {
  const dividerClass = `w-full h-px my-8 relative ${lightColor} ${darkColor}`;
  const textClass = `absolute px-5 font-medium -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${lightTextColor} ${darkTextColor} ${lightBgColor} ${darkBgColor}`;

  return (
    <div className={dividerClass}>
      {text && lightBgColor && darkBgColor && lightTextColor && darkTextColor && (
        <span className={textClass}>{text}</span>
      )}
    </div>
  );
};

export default Divider;
