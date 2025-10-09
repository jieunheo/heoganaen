import styled from "styled-components";
import Noti from "./Noti";
import Menu from "./Menu";

const ModalDiv = styled.section`
  background: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 500;

  .modal {
    background: var(--color-white);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 12px;
    overflow: hidden;
  }

  .list {
    flex-wrap: no-wrap;
    width: 300%;
  }

  .item {
    width: 100%;
  }

  .pagination-wrap {
    margin-top: 20px;
  }
`;

export default function Modal({ item, type, closeModal, btnCount, makeItem }) {
  return (
    <ModalDiv className="modal-bg">
      <div className="modal">
        {type === "noti" ? (
          <Noti
            closeModal={closeModal}
            item={item}
            btnCount={btnCount}
            makeItem={makeItem}
          />
        ) : (
          <Menu closeModal={closeModal} id={id} />
        )}
      </div>
    </ModalDiv>
  );
}
