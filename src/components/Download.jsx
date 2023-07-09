import { BsArrowDown } from "react-icons/bs";

const Download = () => {
  return (
    <div className="container1 flex">
      <div className="home1">
        <div>
          <h1>Download our mobile apps</h1>
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="btn">
            <span>Download</span>
            <span>
              <BsArrowDown />
            </span>
          </button>
        </div>
      </div>
      <div className="img1">
        <img src="/tra3.png" alt="home" />
      </div>
    </div>
  );
};

export default Download;
