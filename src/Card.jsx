import React from "react";
import "./Card.css";

function Card({  sname, series_link }) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img
            src={"https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/cb/0f/82/cb0f823f-0715-9e3c-244d-816fdf4326ff/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"}
            alt="PDF"
            className="card_image"
          />
          <div className="card_info">
            <br />
            <h2 className="card_name">{sname}</h2>
            <br /><br /><br />
            <a href={series_link} target="_blank">
              <b>
                <button className="watch_btn">OPEN! </button>
              </b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
