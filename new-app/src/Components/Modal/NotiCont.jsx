import styled from "styled-components";

export default function NotiItem({ item }) {
  return (
    <>
      <h2 className="title">{item.title}</h2>
      <div className="cont-wrap">
        {item.url && (
          <div className="img-wrap">
            <img src={item.url} alt={item.desc} />
          </div>
        )}
        <div className="contents">
          <p className="date">{item["create_date"]}</p>
          <p className="desc">
            {}
            {item.desc.split("\\n").map((line) => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
}
