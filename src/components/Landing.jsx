import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__description">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <Link to="#features">
            <button className="btn">Browse books</button>
          </Link>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
