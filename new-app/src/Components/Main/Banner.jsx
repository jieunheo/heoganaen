import React from "react";
import styled from "styled-components";

const BannerDiv = styled.section`
  width: 100%;
  padding: 150px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5)),
    url(../../imgs/main.png) no-repeat center / cover;

  .inner-wrap {
    max-width: 1024px;
    margin: 0 auto;
    color: var(--color-white);
  }

  .title {
    font-size: 32px;
  }
  .info {
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 20px;
  }
`;

export default function Banner() {
  return (
    <BannerDiv>
      <div className="inner-wrap">
        <h2 className="a11y-hidden">허가낸 닭발 소개</h2>
        <strong className="title">허가낸 닭발</strong>
        <div className="info">
          <p>맛과 정성을 다하는 허가낸 닭발입니다.</p>
          <p>
            2012년부터 같은 자이레서 홍보 없이 입소문으로만 장사를 해온 전주
            맛집!
            <br />
            변함없는 마음으로 손님께 맛있는 음식을 내어드리고 있습니다.
          </p>
          <p>
            주방에서 조리해서 나와 바로 드실 수 있고
            <br />
            숯불에 한 번 더 구워드시면 더 맛있습니다.
          </p>
        </div>
      </div>
    </BannerDiv>
  );
}
