import React from "react";

const Testimonials = () => {
  return (
    <div className="container1 flex">
      <div className="review flex">
        <div className="box">
          <h2>What our customer are saying</h2>
          <div className="customer flex">
            <div className="person flex">
              <img src="/person.png" alt="person" />
              <div className="">
                <h4>Edward Newgate</h4>
                <h5>Founder Circle</h5>
              </div>
            </div>
            <p>
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
