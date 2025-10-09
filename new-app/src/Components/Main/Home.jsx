import styled from "styled-components";

import Banner from "./Banner";
import MoreButton from "./MoreButton";
import SectionWrap from "./SectionWrap";
import RecomList from "./RecomList";
import NotiList from "./NotiList";
import RevewList from "./ReviewList";
import StoreInfo from "./StoreInfo";
import Map from "./Map";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import NotiCont from "../Modal/NotiCont";

const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  gap: 90px;
  font-size: 20px;

  .no-data {
    padding: 16px;
    color: var(--color-gray);
  }
`;

export default function Home() {
  const [firstPopup, setFirstPopup] = useState(null);
  const [useFirstModal, setUseFirstModal] = useState(true);
  const [notis, setNotis] = useState([
    {
      title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
      date: "2025.10.10",
      desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
      img: "../../imgs/mm01.jpg",
      id: "q",
    },
    {
      title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
      date: "2025.10.10",
      desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
      img: "../../imgs/mm01.jpg",
      id: "w",
    },
    {
      title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
      date: "2025.10.10",
      desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
      // img: "../../imgs/mm01.jpg",
      id: "e",
    },
  ]);
  const [reviews, setReviews] = useState([
    {
      id: 0,
      date: "2025.10.10",
      img: "../../imgs/mm01.jpg",
      cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
      url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
    },
    {
      id: 1,
      date: "2025.10.10",
      img: "../../imgs/mm02.jpg",
      cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
      url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
    },
    {
      id: 2,
      date: "2025.10.10",
      img: "../../imgs/mm03.jpg",
      cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
      url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
    },
    {
      id: 3,
      date: "2025.10.10",
      img: "../../imgs/mm01.jpg",
      cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
      url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
    },
    {
      id: 4,
      date: "2025.10.10",
      img: "../../imgs/mm02.jpg",
      cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
      url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
    },
  ]);

  useEffect(() => {
    setFirstPopup([
      {
        title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
        date: "2025.10.10",
        desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
        img: "../../imgs/mm01.jpg",
        id: "q",
      },
      {
        title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
        date: "2025.10.10",
        desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
        img: "../../imgs/mm01.jpg",
        id: "w",
      },
      {
        title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
        date: "2025.10.10",
        desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
        id: "e",
      },
    ]);

    setReviews([
      {
        id: 0,
        date: "2025.10.10",
        img: "../../imgs/mm01.jpg",
        cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
        url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
      },
      {
        id: 1,
        date: "2025.10.10",
        img: "../../imgs/mm02.jpg",
        cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
        url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
      },
      {
        id: 2,
        date: "2025.10.10",
        img: "../../imgs/mm03.jpg",
        cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
        url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
      },
      {
        id: 3,
        date: "2025.10.10",
        img: "../../imgs/mm01.jpg",
        cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
        url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
      },
      {
        id: 4,
        date: "2025.10.10",
        img: "../../imgs/mm02.jpg",
        cont: "포장해서 숙소에서 먹었는데 너무 맛있었어요!! 쌈류도 넉넉하게 챙겨주셔서 먹기 좋았고 또 생각나는 닭발맛이에요ㅜㅜ 전주 놀러가면 ...",
        url: "https://map.naver.com/p/entry/place/16792179?c=18.52,0,0,0,dh&placePath=/review?selectedReview=6833ee0314d269f812efb587&selectedReview=6833ee0314d269f812efb587&fromPanelNum=1&additionalHeight=76&timestamp=202510091349&locale=ko&svcName=map_pcv5",
      },
    ]);

    setNotis([
      {
        title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
        date: "2025.10.10",
        desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
        img: "../../imgs/mm01.jpg",
        id: "q",
      },
      {
        title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
        date: "2025.10.10",
        desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
        img: "../../imgs/mm01.jpg",
        id: "w",
      },
      {
        title: "[공지] 2025년 추석 연휴 기간 영업일 안내",
        date: "2025.10.10",
        desc: "연휴 영업 관련 내용은 이 위치에 작성된답니다.",
        // img: "../../imgs/mm01.jpg",
        id: "e",
      },
    ]);
  }, []);

  // function closeModal(time) {
  //   if (time) setUseFirstModal(time.getDate() + 1);
  //   else setUseFirstModal(false);
  // }

  // function makeItem(item) {
  //   return (
  //     <li className="item" key={item.id}>
  //       <NotiCont item={item} btnCount />
  //     </li>
  //   );
  // }

  // function checkDate() {
  //   if (useFirstModal > new Date()) {
  //     useFirstModal(true);
  //   }

  //   return firstPopup;
  // }

  return (
    <MainDiv>
      {/* {firstPopup && checkDate() && (
        <Modal
          type="noti"
          item={firstPopup}
          closeModal={closeModal}
          btnCount={2}
          makeItem={makeItem}
        />
      )} */}
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
        {notis.length > 0 ? (
          <NotiList notis={notis} />
        ) : (
          <div className="no-data">공지가 없습니다.</div>
        )}
      </SectionWrap>
      <SectionWrap
        title="허가낸 리뷰"
        desc={<p>드시고 가신 분들의 실제 리뷰를 확인해보세요!</p>}
      >
        {reviews.length > 0 ? (
          <RevewList reviews={reviews} />
        ) : (
          <div className="no-data">리뷰가 없습니다.</div>
        )}
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
