import React from "react";
import style from "./HomePage.module.css";
import bg from "../../assets/img/bg.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="section">
        <img className={style.bg} src={bg} alt="background for website" />
        <div className="container">
          <h2 className={style.text}>HERE YOU CAN RENT</h2>
          <TypeWriterEffect
            className={style.typewritter}
            textStyle={{
              color: "#1c6b72",
              fontWeight: 500,
              fontSize: "4.5em",
              marginLeft: "11em",
            }}
            startDelay={500}
            cursorColor="#3F3D56"
            multiText={["APARTMENT", "HOUSE", "FLAT", "CAR"]}
            multiTextDelay={2000}
            typeSpeed={100}
            multiTextLoop
          />
          <Link to="/goods">
            <button className={style.btn}>Rent Now!</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
