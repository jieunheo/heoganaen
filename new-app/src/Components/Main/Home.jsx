import styled from "styled-components";

import Banner from "./Banner";
import MoreButton from "./MoreButton";
import SectionWrap from "./SectionWrap";
import RecomList from "./RecomList";
import NotiList from "./NotiList";
import RevewList from "./ReviewList";
import StoreInfo from "./StoreInfo";
import Map from "./Map";

const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  gap: 90px;
  font-size: 20px;
`;

export default function Home() {
  return (
    <MainDiv>
      <Banner />
      <SectionWrap
        title="추천 메뉴"
        desc={
          <div className="btn-wrap">
            <p>
              허가낸 닭발의 추천 메뉴입니다!
              <br /> 오시면 꼭 드셔보세요!
            </p>
            <MoreButton
              text={
                <>
                  더보기
                  <img src="../../imgs/icon-more-arrow.svg" alt="" />
                </>
              }
              link="/menu"
            />
          </div>
        }
      >
        <RecomList />
      </SectionWrap>
      <SectionWrap
        title="가게 공지사항"
        desc={
          <p>
            허가낸 닭발 공지사항입니다.
            <br /> 가게 일정 및 메뉴에 변동 사항이 생기는 경우 공지사항으로
            올라갑니다.
          </p>
        }
      >
        <NotiList />
      </SectionWrap>
      <SectionWrap
        title="허가낸 리뷰"
        desc={<p>드시고 가신 분들의 실제 리뷰를 확인해보세요!</p>}
      >
        <RevewList />
      </SectionWrap>
      <SectionWrap title="가게 정보">
        <StoreInfo />
      </SectionWrap>
      <SectionWrap
        title="오시는 길"
        desc={<p>전북 전주시 완산구 동문길 64, 허가낸 닭발</p>}
      >
        <Map />
      </SectionWrap>
    </MainDiv>
  );
}
