import React, { useState } from "react";

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section style={{ marginBottom: "1rem", border: "1px solid #ccc", borderRadius: 5 }}>
      <header
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          padding: "0.5rem 1rem",
          backgroundColor: "#f0f0f0",
          userSelect: "none",
        }}
      >
        <h2 style={{ margin: 0 }}>
          {title} {isOpen ? "▲" : "▼"}
        </h2>
      </header>
      {isOpen && <div style={{ padding: "1rem" }}>{children}</div>}
    </section>
  );
};

export default CollapsibleSection;
