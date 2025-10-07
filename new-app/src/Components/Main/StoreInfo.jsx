import styled from "styled-components";

const StoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .list-wrap {
    display: flex;
    gap: 30px;

    width: 500px;
  }

  .title {
    font-size: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    font-size: 16px;

    flex-grow: 1;
  }

  .accent {
    color: var(--color-main);
  }

  .line {
    width: 100%;
    border-bottom: 1px solid var(--color-gray);
  }

  .tel {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

export default function StoreInfo() {
  return (
    <StoreDiv>
      <div className="list-wrap">
        <h3 className="title">이용 시간</h3>
        <ul className="time list">
          <li className="item">평일: 17:00 ~ 00:00</li>
          <li className="item">토: 17:00 ~ 23:00</li>
          <li className="item accent">
            (매주 일요일과 둘째, 넷째 월요일 휴무)
          </li>
        </ul>
      </div>
      <div className="list-wrap">
        <h3 className="title">이용 안내</h3>
        <ul className="guide list">
          <li className="item">
            좌석: 4인석 4개, 6인석 2개 (초과 인원도 착석 가능)
          </li>
          <li className="item">화장실: 남여 공용</li>
          <li className="item">주차장: 없음</li>
          <li className="item line"></li>
          <li className="item">와이파이: 있음</li>
          <li className="item line"></li>
          <li className="item">예약: 피크타임 외 가능</li>
          <li className="item">
            포장: 1인분 이상 가능 (2인분 부터 숯불에 구워 나갑니다)
          </li>
          <li className="item">배달: 불가</li>
          <li className="item">배송: 택배 가능</li>
        </ul>
      </div>
      <div className="list-wrap">
        <h3 className="title">이용 안내</h3>
        <ul className="guide list">
          <li className="item tel">
            <img src="../../imgs/icon-cal.svg" alt="" />
            <a href="tel:0632887297">063) 288-7297</a>
          </li>
        </ul>
      </div>
    </StoreDiv>
  );
}
