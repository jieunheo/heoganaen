import { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

const RecomWrap = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    height: 70%;
    background-color: var(--color-main);
    z-index: -1;
  }

  .recom-list {
    display: flex;
    gap: 18px;
    align-items: end;
    justify-content: center;
    color: var(--color-white);
  }
  .recom-item {
    cursor: pointer;
  }
  .recom-item:hover {
    transform: translateY(-2%);
    transition: 0.3s linear;
  }

  .recom-item.first {
    order: 1;
  }
  .recom-item.second {
    order: 0;
  }
  .recom-item.third {
    order: 3;
  }

  .img-wrap {
    width: 300px;
    aspect-ratio: 300 / 230;
    overflow: hidden;
    border-radius: 16px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  }
  .recom-item.first .img-wrap {
    width: 330px;
  }

  .img-wrap img {
    width: 100%;
    aspect-ratio: 300 / 230;
    object-fit: cover;
  }

  .name {
    font-size: 24px;
    margin-top: 10px;
  }
`;

export default function RecomList({ recoms }) {
  const [modal, setModal] = useState(null);

  function openModal(item) {
    setModal(item);
  }

  function closeModal() {
    setModal(null);
  }

  return (
    <>
      <RecomWrap>
        <ul className="recom-list">
          {recoms.map((recom) => {
            const recomClass =
              recom.recom === "1"
                ? "first"
                : recom.recom === "2"
                ? "second"
                : recom.recom === "3"
                ? "third"
                : "";
            return (
              <li
                key={recom.id}
                className={`recom-item ${recomClass}`}
                onClick={() => openModal(recom)}
              >
                <div className="img-wrap">
                  <img src={recom.url} alt={recom.name} />
                </div>
                <h3 className="name">{recom.name}</h3>
              </li>
            );
          })}
        </ul>
      </RecomWrap>

      {modal && <Modal type="menu" item={modal} closeModal={closeModal} />}
    </>
  );
}
