import React from "react";

const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";

export default () => (
  <div style={{ margin: "2%" }}>
    <img
      src={img1}
      style={{
        borderRadius: "16px",
        width: "100%",
        height: "245px",
        backgroundSize: "cover"
      }}
    />
  </div>
);
