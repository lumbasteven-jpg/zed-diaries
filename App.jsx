
import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>

      <div style={{ background: "black", color: "white", padding: "60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px" }}>Zed Diaries</h1>
        <p>Exploring Zambia | Culture | Lifestyle</p>
      </div>

      <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Street Life in Kitwe</h3>
          <p>Real street experience in Zambia.</p>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Zambian Weddings</h3>
          <p>Beautiful traditional celebrations.</p>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
          <h3>Riverside Views</h3>
          <p>Nature and lifestyle content.</p>
        </div>

      </div>

      <div style={{ background: "black", color: "white", textAlign: "center", padding: "20px" }}>
        © 2026 Zed Diaries
      </div>

    </div>
  );
}
