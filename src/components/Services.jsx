import React from "react";

const Service = () => {
  return (
    <div style={styles.container}>
      <h1>Online Delivery</h1>
      <h2>Door delivary</h2>
      <p>Self-Service Shopping: Customers use trolleys to select items from labeled shelves.
        Product Variety: Selling groceries, fresh produce, meat, bakery, dairy, plus non-food items like household goods, electronics, and more.
        Customer Assistance: Staff help locate items, answer queries, and ensure cleanliness.
        Checkout:Efficient payment processing at the end of the store. </p>
      <p>Buy one Get One Offer!.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },
};

export default Service;
