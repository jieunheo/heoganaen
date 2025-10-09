import { useState } from "react";
import styled from "styled-components";
import Slider from "../Slider/Slider";
import ReviewItem from "./ReviewItem";

const ReviewWrap = styled.div`
  .list {
    gap: 18px;
    padding: 10px;
  }

  .item {
    padding: 16px;
    text-align: left;

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
  }

  .date {
    font-size: 14px;
  }

  .review {
    width: 200px;
    font-size: 16px;
  }
`;

export default function ReviewList({ reviews }) {
  function makeItem(item) {
    return <ReviewItem item={item} key={item.id} />;
  }

  return (
    <ReviewWrap>
      <Slider
        useArrow={true}
        usePage={true}
        makeItem={makeItem}
        showItemCount={3}
        type="review"
        items={reviews}
        width={250}
      />
    </ReviewWrap>
  );
}
