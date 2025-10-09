import { useEffect, useState } from "react";
import styled from "styled-components";

const SliderWrap = styled.div`
  max-width: ${({ showItemCount, width }) =>
    showItemCount ? +showItemCount * width : 1024}px;

  .container {
    position: relative;
  }

  .list-wrap {
    overflow: hidden;
  }

  .list {
    display: flex;

    transition: 0.2s;
    transform: translateX(
      -${({ currentIndex, showItemCount, width }) => {
          if (showItemCount - currentIndex > 0) return currentIndex * width;
          else return (showItemCount - 1) * width;
        }}px
    );
  }

  .item {
    background-color: var(--color-white);

    display: flex;
    flex-direction: column;

    border-radius: 12px;
  }

  .item img {
    width: 100%;
    object-fit: cover;
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

export default function Slider({
  items,
  useArrow,
  usePage,
  openModal = null,
  makeItem,
  showItemCount = 1,
  type,
  width,
}) {
  const [currentIndex, setCurrentIndex] = useState(null);
  console.log(currentIndex);
  console.log(width);

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  function handlePrevSlider() {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function handleNextSlider() {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function handleClick(i) {
    setCurrentIndex(i);
  }

  return (
    <SliderWrap
      showItemCount={showItemCount}
      currentIndex={currentIndex}
      width={width}
    >
      <div className="container">
        <div className="list-wrap">
          <ul className="list">
            {items.map((item) => {
              return makeItem(item);
            })}
          </ul>
        </div>
        {useArrow && (
          <div className="arrow-wrap">
            <button className="arrow-prev" onClick={handlePrevSlider}>
              <img src="../../imgs/icon-prev-arrow.svg" alt="" />
            </button>
            <button className="arrow-next" onClick={handleNextSlider}>
              <img src="../../imgs/icon-next-arrow.svg" alt="" />
            </button>
          </div>
        )}
        {usePage && (
          <ul className="pagination-wrap">
            {items.map((item, i) => {
              return (
                <li className="page" key={item.id}>
                  <button
                    className={currentIndex === i ? "active" : ""}
                    onClick={() => handleClick(i)}
                  ></button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </SliderWrap>
  );
}
