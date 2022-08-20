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
    <section style={{ background: backgroundColor }}>
      {title !== undefined && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
