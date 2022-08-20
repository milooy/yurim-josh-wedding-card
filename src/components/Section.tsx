import React from "react";

const Section = ({
  backgroundColor,
  title,
  children,
}: {
  backgroundColor: string;
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <section style={{ background: backgroundColor, padding: "24px 16px" }}>
      {title !== undefined && (
        <h2 style={{ marginBottom: "0.5rem" }}>{title}</h2>
      )}
      {children}
    </section>
  );
};

export default Section;
