import React from 'react';

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
    <section style={{ background: backgroundColor, padding: `${GAP}px 16px` }}>
      {title !== undefined && <h2 style={{ marginBottom: GAP }}>{title}</h2>}
      {children}
    </section>
  );
};

const GAP = 28;

export default Section;
