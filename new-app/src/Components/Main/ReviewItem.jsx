import React from "react";

export default function NotiListItem({ item }) {
  return (
    <li className="item">
      <div>
        <img src={item.img} alt={item.cont} />
      </div>
      <div>
        <p className="date">{item.date}</p>
        <p className="review">{item.cont}</p>
      </div>
    </li>
  );
}
