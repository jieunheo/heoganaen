import styled from "styled-components";
import NotiCont from "./NotiCont";
import Slider from "../Slider/Slider";

const NotiDiv = styled.div`
  max-height: 80vh;

  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;

  .title {
    padding: 16px 16px 0;
    font-size: 20px;
  }

  .cont-wrap {
    margin-bottom: 60px;
    overflow-y: auto;
  }
  .img-wrap {
    margin: 0 16px;
  }

  img {
    width: 100%;
  }

  .contents {
    padding: 0 16px;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .date {
    color: var(--color-gray);
  }

  .btns-wrap {
    position: fixed;
    bottom: 0;
    width: 100%;

    background: var(--color-white);
    font-weight: bold;
    font-size: 16px;

    display: flex;
    gap: 1px;
  }
  .btns-wrap button {
    width: 100%;
    color: var(--color-white);
    padding: 16px;
    background: var(--color-black);
  }
  .btns-wrap button:hover {
    background: var(--color-main);
  }
`;

export default function Noti({ item, closeModal, btnCount = 1, makeItem }) {
  return (
    <NotiDiv>
      {item.length > 1 ? (
        <Slider
          usePage={true}
          makeItem={makeItem}
          type="noti"
          items={item}
          width={600}
        />
      ) : (
        <NotiCont item={item} />
      )}
      {btnCount === 1 ? (
        <div className="btns-wrap">
          <button onClick={closeModal}>닫기</button>
        </div>
      ) : (
        <div className="btns-wrap">
          <button onClick={() => closeModal(new Date())}>
            오늘하루 안보기
          </button>
          <button onClick={() => closeModal()}>모두 닫기</button>
        </div>
      )}
    </NotiDiv>
  );
}
