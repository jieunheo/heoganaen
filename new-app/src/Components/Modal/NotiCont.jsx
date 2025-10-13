import styled from "styled-components";

export default function NotiItem({ item }) {
  return (
    <>
      <h2 className="title">{item.title}</h2>
      {item.img && (
        <div className="img-wrap">
          <img src={item.img} alt={item.desc} />
        </div>
      )}
      <div className="contents">
        <p className="date">{item["create_date"]}</p>
        <p className="desc">{item.desc}</p>
      </div>
    </>
  );
}
