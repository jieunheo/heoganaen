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

export default function Banner({ infos }) {
  return (
    <BannerDiv id="banner">
      <div className="inner-wrap">
        <h2 className="a11y-hidden">허가낸 닭발 소개</h2>
        <strong className="title">허가낸 닭발</strong>
        <div className="info">
          <p>
            {infos?.introduce?.value.split("\\n").map((line) => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })}
          </p>
        </div>
      </div>
    </BannerDiv>
  );
}
