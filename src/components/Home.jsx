import React from "react";

const Home = () => {
  return (
    <div className="container flex">
      <div className="home1">
        <div>
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button>Consult today</button>
        </div>
      </div>
      <div className="img1">
        <img src="/home.png" alt="home" />
      </div>
    </div>
  );
};

export default Home;
