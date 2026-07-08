import React, { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  background?: string;
  shadow?: string;
  padding?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = "",
      background = "linear-gradient(45deg, #3e49a5 0%, #03042c 100%)",
      shadow = "0 4px 16px rgba(0, 87, 184, 0.15)",
      padding = "24px",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={`transition-all duration-300 rounded-2xl ${className}`}
      style={{
        background,
        boxShadow: shadow,
        padding,
        color: "#fff",
        minHeight: "350px",
        maxWidth: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = "Card";

export default Card;