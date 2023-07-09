import React from "react";

const Contact = () => {
  return (
    <div className="container1 flex">
      <div className="container1 flex2">
        <div className="service">
          <h1>Contact</h1>
          <p> Have any questions? We’d love to hear from you.</p>
        </div>
        <div className="form flex">
          <div className="flex">
            <div>
              <p>Your Name</p>
              <input type="text" />
            </div>
            <div>
              <p>Phone No.</p>
              <input type="text" />
            </div>
          </div>
          <div className="email">
            <p>Email ID</p>
            <input type="text" />
          </div>
          <div className="message">
            <p>Your message</p>
            <input type="text" />
          </div>
          <button className="btn white-button">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
