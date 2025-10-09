import React from "react";

export default function NotiItem({ item, openModal }) {
  const dateSpit = item.date.split(".");
  const year = `${dateSpit[0]}.${dateSpit[1]}`;
  const day = dateSpit[2];

  return (
    <li key={item.id} className="noti-item" onClick={() => openModal(item)}>
      <div className="date">
        <p className="year-month">{year}</p>
        <p className="day">{day}</p>
      </div>
      <div className="noti-info">
        <p className="noti-title">{item.title}</p>
        <p className="noti-desc">{item.desc}</p>
      </div>
      {item.img && (
        <div className="img-wrap">
          <img src={item.img} alt="" />
        </div>
      )}
    </li>
  );
}
