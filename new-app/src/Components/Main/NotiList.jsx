import { useRef, useState } from "react";
import styled from "styled-components";

import MoreButton from "./MoreButton";
import Modal from "../Modal/Modal";
import NotiItem from "./NotiItem";

const NotiWrap = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  .noti-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .noti-item {
    width: 80%;
    max-width: 640px;
    display: flex;
    align-items: center;

    gap: 30px;

    padding: 8px 16px;
    border-radius: 16px;
    height: 96px;
    box-sizing: border-box;

    cursor: pointer;
  }

  .noti-item:hover {
    outline: 1px solid var(--color-main);
  }

  .year-month {
    font-size: 12px;
  }
  .day {
    font-size: 32px;
    font-weight: bold;
  }

  .noti-info {
    flex-grow: 1;

    text-align: left;
  }
  .noti-title {
    font-size: 20px;
    font-weight: bold;
  }
  .noti-desc {
    font-size: 16px;
  }

  .img-wrap {
    width: 121px;
    height: 80px;
    aspect-ratio: 121 / 80;
  }

  .img-wrap img {
    width: 100%;
    aspect-ratio: 121 / 80;
    object-fit: cover;
  }
`;

export default function NotiList({ notis }) {
  const [modal, setModal] = useState(null);

  function openModal(item) {
    setModal(item);
  }

  function closeModal() {
    setModal(null);
  }

  return (
    <>
      <NotiWrap>
        <ul className="noti-list">
          {notis.map((item) => {
            return <NotiItem item={item} openModal={openModal} />;
          })}
        </ul>

        <MoreButton
          text={
            <>
              더보기
              <img src="../../imgs/icon-more-arrow.svg" alt="" />
            </>
          }
          link="/notice"
        />
      </NotiWrap>

      {modal && <Modal type="noti" item={modal} closeModal={closeModal} />}
    </>
  );
}
