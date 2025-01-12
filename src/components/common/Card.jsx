import React from "react";

const Card = React.forwardRef(
  ({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        borderRadius: "0.375rem",
        border: "1px solid #eaeaea",
        backgroundColor: "#ffffff",
        color: "#333333",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef(
  ({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.375rem",
        padding: "1.5rem",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(
  ({ style, children, ...props }, ref) => (
    <h3
      ref={ref}
      style={{
        fontSize: "1.5rem",
        fontWeight: "600",
        lineHeight: "1.25",
        letterSpacing: "-0.02em",
        ...style,
      }}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(
  ({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        padding: "1.5rem",
        paddingTop: "0",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
