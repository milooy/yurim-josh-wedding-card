import React from 'react';

const Section = ({
  backgroundColor,
  title,
  children,
  style,
}: {
  backgroundColor: string;
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <section
      style={{
        background: backgroundColor,
        padding: `${GAP}px 16px`,
        borderBottom: '1px solid black',
        ...style,
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {title !== undefined && <h2 style={{ marginBottom: GAP }}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

const GAP = 32;

export default Section;
