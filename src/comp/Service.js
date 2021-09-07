import React from "react";
import "../styles/Other.css";

const arr = [
  {
    id: "1",
    name: "home wiring",
    src: "./images/a.jpg",
    icon: "/images/icon1.png"
  },
  {
    id: "2",
    name: "home safety services",
    src: "./images/b.jpg",
    icon: "/images/icon2.png"
  },
  {
    id: "3",
    name: "electrical services",
    src: "./images/d.jpg",
    icon: "/images/icon3.png"
  }
];

export default function Service() {
  return (
    <>
      {/****** css in others.css **********/}
      <div className="service-head" id="services">
        <h1 id="service-h1">
          <span>Our</span> Services
        </h1>
      </div>
      <div className="card">
        {arr.map((p) => (
          <div className="cards" key={p.id}>
            <div className="card-d">
              <div className="card-main">
                <div className="card-img">
                  <img className="card-img-1" src={p.src} alt="none" />
                </div>
                <div className="card-text">
                  <img src={p.icon}/>
                  <h2 className="card-title">{p.name}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
