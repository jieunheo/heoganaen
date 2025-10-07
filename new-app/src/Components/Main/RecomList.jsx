import styled from "styled-components";

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

export default function RecomList() {
  return (
    <RecomWrap>
      <ul className="recom-list">
        <li className="recom-item first">
          <div className="img-wrap">
            <img src="../../imgs/mm01.jpg" alt="숯불 무뼈 닭발" />
          </div>
          <h3 className="name">숯불 무뼈 닭발</h3>
        </li>
        <li className="recom-item second">
          <div className="img-wrap">
            <img src="../../imgs/mm05.jpg" alt="간장 닭목살" />
          </div>
          <h3 className="name">간장 닭목살</h3>
        </li>
        <li className="recom-item third">
          <div className="img-wrap">
            <img src="../../imgs/mn01.jpg" alt="냄비 국수" />
          </div>
          <h3 className="name">냄비 국수</h3>
        </li>
      </ul>
    </RecomWrap>
  );
}
