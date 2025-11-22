import React from "react";
import { Link, type LinkProps } from "react-router-dom";

export interface NavUnderlineItemProps
  extends Omit<LinkProps, "to" | "children"> {
  label: string;
  to: string;
  isActive?: boolean;
}

/**
 * NavUnderlineItem
 *
 * Renders a single navigation item with the "bottom bar grow" underline effect.
 *
 * Expected usage:
 *  - Receives the link `to`, display `label`, and `isActive` flag.
 *  - You can pass onClick, aria-* props, etc. via remaining LinkProps.
 */
export const NavUnderlineItem: React.FC<NavUnderlineItemProps> = ({
  label,
  to,
  isActive = false,
  className = "",
  ...linkProps
}) => {
  return (
      <Link
        to={to}
        className={
          "relative inline-block group text-white " + className
        }
        role="menuitem"
        tabIndex={0}
        aria-current={isActive ? "page" : undefined}
        {...linkProps}
      >
        <span className={`duration-300 transform-gpu ${isActive ? 'font-bold' : ''}`}>
          {label}
        </span>
        <span
          className={`
            absolute left-0 right-0 bottom-0 rounded-full
            transform origin-center transform-gpu
            transition-transform duration-300
            scale-x-0
            group-hover:scale-x-90
            ${isActive ? 'bg-white h-0.5' : 'bg-white h-0.25'}
        `}
          aria-hidden="true"
        ></span>
      </Link>
  );
};