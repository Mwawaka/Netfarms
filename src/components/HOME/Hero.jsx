import React from "react";
import agri from "../images/agriteck.jpg";
function Hero(props) {
  return (
    <section>
      <div className="card">
        <h1 className="card--title" id="netfarms">
          What is Net<span id="spawn">Farms</span>?{" "}
        </h1>
        <p className="card--description">{props.datas.description}</p>
      </div>
      <div className="card--2">
        <h1 className="card--title" id="objectives">
          Our Objec<span id="spawn">tives</span>?
        </h1>
        <div className="card--obj">
          <img src={agri} className='card--agri' />
          <p className="card2--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo
            cumque inventore reprehenderit! Et beatae culpa magnam nemo totam
            libero possimus nihil vel corporis fugiat hic, ipsam sapiente saepe
            reiciendis animi atque consequatur ea tenetur, explicabo, quidem
            fugit suscipit necessitatibus. Error recusandae sint quisquam magnam
            quis quidem sequi reprehenderit tempore.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
