import React from "react";

export default function NotiItem({ item, openModal }) {
  const date = item.create_date.split(" ");
  const dateSplit = date[0].split("-");
  const year = `${dateSplit[0]}.${dateSplit[1]}`;
  const day = dateSplit[2];

  const descValue = item.desc.split("\\n");

  return (
    <li key={item.id} className="noti-item" onClick={() => openModal(item)}>
      <div className="date">
        <p className="year-month">{year}</p>
        <p className="day">{day}</p>
      </div>
      <div className="noti-info">
        <p className="noti-title">{item.title}</p>
        <p className="noti-desc">{descValue[0]}</p>
      </div>
      {item.url && (
        <div className="img-wrap">
          <img src={item.url} alt="" />
        </div>
      )}
    </li>
  );
}
