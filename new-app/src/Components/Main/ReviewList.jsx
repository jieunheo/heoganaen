import styled from "styled-components";

const ReviewWrap = styled.div`
  .container {
    position: relative;
  }

  .list {
    display: flex;
    gap: 18px;
    padding: 10px;
    overflow: hidden;
  }

  .item {
    padding: 16px;

    background-color: var(--color-white);

    display: flex;
    flex-direction: column;

    border-radius: 12px;

    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    transition: 0.3s;
    cursor: pointer;
  }
  .item:hover {
    transform: translateY(-2%);
  }

  .item img {
    width: 200px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .date {
    font-size: 14px;
  }

  .review {
    width: 200px;
    font-size: 16px;
  }

  .arrow-wrap button {
    position: absolute;
    top: 5%;

    padding: 145px 40px;
  }

  .arrow-prev {
    left: -15%;
  }
  .arrow-next {
    right: -15%;
  }

  .pagination-wrap {
    display: flex;
    gap: 20px;
    justify-content: center;

    margin-top: 40px;
  }
  .page button {
    width: 10px;
    height: 10px;
    background: var(--color-gray);
    border-radius: 50%;

    cursor: pointer;
  }
  .page button.active {
    background: var(--color-main);
  }
`;

export default function ReviewList() {
  return (
    <ReviewWrap>
      <div className="container">
        <ul className="list">
          <li className="item">
            <div>
              <img src="../../imgs/mm01.jpg" alt="" />
            </div>
            <div>
              <p className="date">2025.10.10</p>
              <p className="review">
                포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게
                챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주
                놀러가면 ...
              </p>
            </div>
          </li>
          <li className="item">
            <div>
              <img src="../../imgs/mm02.jpg" alt="" />
            </div>
            <div>
              <p className="date">2025.10.10</p>
              <p className="review">
                포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게
                챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주
                놀러가면 ...
              </p>
            </div>
          </li>
          <li className="item">
            <div>
              <img src="../../imgs/mm03.jpg" alt="" />
            </div>
            <div>
              <p className="date">2025.10.10</p>
              <p className="review">
                포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게
                챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주
                놀러가면 ...
              </p>
            </div>
          </li>
        </ul>
        <div className="arrow-wrap">
          <button className="arrow-prev">
            <img src="../../imgs/icon-prev-arrow.svg" alt="" />
          </button>
          <button className="arrow-next">
            <img src="../../imgs/icon-next-arrow.svg" alt="" />
          </button>
        </div>
        <ul className="pagination-wrap">
          <li className="page">
            <button className="active"></button>
          </li>
          <li className="page">
            <button></button>
          </li>
          <li className="page">
            <button></button>
          </li>
          <li className="page">
            <button></button>
          </li>
          <li className="page">
            <button></button>
          </li>
        </ul>
      </div>
    </ReviewWrap>
  );
}
