import { BsArrowRight } from "react-icons/bs";

const Article = () => {
  return (
    <div className="container1 flex-service">
      <div className="service">
        <h1>Our Services</h1>
      </div>

      <div className="cards">
        <div className="card2">
          <div className="card-content">
            <img src="/article2 (2).png" alt="img" />
            <div className="card-pad">
              <h3>Disease detection, check up in the laboratory</h3>
              <p>
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
            </div>
            <a href="/">
              Read More <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="card2">
          <div className="card-content">
            <img src="/article2 (1).png" alt="img" />
            <div className="card-pad">
              <h3>Herbal medicines that are safe for consumption</h3>
              <p>
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
            </div>
            <a href="/">
              Read More <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="card2">
          <div className="card-content">
            <img src="/article2 (3).png" alt="img" />
            <div className="card-pad">
              <h3>Natural care for healthy facial skin</h3>
              <p>
                A healthy lifestyle should start from now and also for your skin
                health. There are some...
              </p>
            </div>
            <a href="/">
              Read More <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
      <button className="btn white-button">View all</button>
    </div>
  );
};

export default Article;
