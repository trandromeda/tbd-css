import clsx from "clsx";
import React from "react";
import { forwardRef } from "react";
import { atoms, extractAtoms } from "../atoms";

type jsxType = keyof JSX.IntrinsicElements


export const Box = forwardRef((props: any, ref) => {
    const { as: Component = "div", ...other } = props;
    const [atomsProps, propsToForward] = extractAtoms(other);
    const div = "div" as jsxType;

    const className = 
      atoms({
        resetElement: typeof Component === "string" ? Component as jsxType : div,
        className: propsToForward.className,
        ...atomsProps,
      })
  
    return (
      <Component
        {...propsToForward}
        className={className}
        ref={ref}
      />
    );
  });