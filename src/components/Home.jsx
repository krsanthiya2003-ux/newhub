
import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>A.K.T Super Market</h1>
      <h2>Welcome to All!</h2>
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

export default Home;
