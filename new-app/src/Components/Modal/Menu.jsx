import { useState } from "react";
import styled from "styled-components";

const MenuDiv = styled.div`
  width: 790px;
  background-color: var(--color-lightgray);

  .menu-info {
    background-color: var(--color-white);
    padding: 32px;
    border-radius: 12px 12px 0 0;

    display: flex;
    gap: 24px;
  }

  .img-wrap {
    font-size: 0;
    max-width: 350px;
    border-radius: 8px;
    overflow: hidden;
  }
  .img-wrap img {
    aspect-ratio: 1/1;
    object-fit: cover;
    width: 100%;
  }

  .cont-wrap {
    flex-grow: 1;
  }
  .basic-info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 4px;
  }
  .name {
    display: flex;
    justify-content: space-between;
  }
  .ko_name {
    font-size: 20px;
    font-weight: bold;
  }
  .en_name {
    font-size: 16px;
    color: var(--color-gray);
  }
  .desc {
    font-size: 16px;
    align-self: start;
  }
  .line {
    border-bottom: 1px solid var(--color-lightgray);
  }
  .price {
    font-size: 20px;
    font-weight: bold;
    align-self: end;
  }

  .explanation {
    width: 100%;
    margin-top: 8px;
    padding: 16px;
    font-size: 16px;
    background: var(--color-menu-bg);
    white-space: pre-line;
    text-align: left;
  }

  .btn-wrap button {
    width: 100%;
    padding: 8px;
    background-color: var(--color-lightgray);

    display: flex;
    justify-content: center;
  }
  .btn-wrap button::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background: url(../../imgs/icon-close-popup.svg) no-repeat center center;
  }
  .btn-wrap button:hover::after {
    background-image: url(../../imgs/icon-close-popup-hover.svg);
  }

  .btn-wrap button:hover {
    width: 100%;
    padding: 8px;
    background-color: var(--color-main);
  }
`;

export default function Menu({ item, closeModal }) {
  const [hover, setHover] = useState(false);

  const descArr = item.desc.replaceAll(", ", " / ");
  // const explanation = item.explanation.replaceAll("\\n\\r", "<br />");

  return (
    <MenuDiv>
      <div className="menu-info">
        <div className="img-wrap">
          <img src={item.url} alt={item.name} />
        </div>
        <div className="cont-wrap">
          <div className="basic-info">
            <div className="name">
              <h3 className="ko_name">{item.name}</h3>
              <span className="en_name">{item["en_name"]}</span>
            </div>
            {descArr && <p className="desc">[ {descArr} ]</p>}
            <div className="line"></div>
            <p className="price">
              <data value={item.price}>{item.price}</data>원
            </p>
          </div>
          <div className="explanation">{item.explanation}</div>
        </div>
      </div>
      <div className="btn-wrap">
        <button onClick={closeModal}>
          <span className="a11y-hidden">닫기</span>
        </button>
      </div>
    </MenuDiv>
  );
}
