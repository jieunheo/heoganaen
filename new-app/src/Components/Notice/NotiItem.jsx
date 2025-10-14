import React, { useState } from "react";

export default function NotiItem({ noti }) {
  const [isOpen, setIsOpen] = useState(false);

  const date = noti["create_date"].split(" ")[0];

  let popup = false;
  if (noti["is_popup"] === "1") popup = true;
  else if (noti["is_popup"] === "2") {
    const now = new Date();
    const start = new Date(noti["start_date"]);
    const end = new Date(noti["end_date"]);
    if (now >= start && now <= end) popup = true;
  }

  return (
    <li className={"row table-item"}>
      <div className="item-title" onClick={() => setIsOpen(!isOpen)}>
        <p className="noti-num">{noti.id}</p>
        <p className={popup ? "noti-title popup" : "noti-title"}>
          {popup && <span>[공지]</span>}
          {noti.title}
          {noti.url && <img src="../../imgs/icon-img.svg" alt="" />}
        </p>
        <p className="noti-date">{date}</p>
      </div>
      <div className={isOpen ? "noti-desc open" : "noti-desc"}>
        {noti.url && (
          <div className="img-wrap">
            <img src={noti.url} alt={noti.title} />
          </div>
        )}
        <p className="text">{noti.desc}</p>
      </div>
    </li>
  );
}
