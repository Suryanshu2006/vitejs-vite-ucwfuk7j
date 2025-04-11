// write product card here
import React from "react";
import ViewProductButton from "./button";

const Productcard = () => {
  // Static data for product
  const productImage = "https://via.placeholder.com/150"; // Placeholder image URL
  const productName = "Sample Product";
  const productPrice = "$25.00";

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", maxWidth: "200px", textAlign: "center" }}>
      <img src={productImage} alt={productName} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{productName}</h3>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;