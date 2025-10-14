import styled from "styled-components";
import NotiItem from "./NotiItem";
const NoticeDiv = styled.main`
  .title-wrap {
    padding: 60px 0 40px;
    color: var(--color-white);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background: linear-gradient(rgba(0, 0, 0, 0.5)),
      url(../../imgs/main.jpg) no-repeat center / cover;
  }
  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .desc {
    font-size: 16px;
    text-align: center;
  }

  .popup {
    font-weight: bold;
    color: var(--color-main);
  }

  .cont-wrap {
    background: var(--color-white);
    margin: 0 auto;
    max-width: 1024px;
    min-height: 55vh;
    padding: 40px;
  }

  .top-wrap {
    display: flex;
    justify-content: space-between;
  }
  .total {
    font-size: 12px;
  }
  .total data {
    font-weight: bold;
  }

  .form-wrap {
    display: flex;
    border: 1px solid var(--color-lightgray);
    border-radius: 24px;
    overflow: hidden;
  }
  .form-wrap select {
    border: none;
    padding: 12px 24px;
    border-radius: 24px 0 0 24px;
  }
  .form-wrap input {
    border: none;
    padding: 12px;
  }
  .form-wrap button {
    padding: 12px;
  }

  .table {
    margin-top: 16px;
  }
  .row .item-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid var(--color-lightgray);
  }
  .row p {
    padding: 10px;
    width: 120px;
  }

  .row .noti-title {
    flex-grow: 1;

    display: flex;
    align-items: center;
    gap: 4px;
  }
  .row.table-title {
    font-weight: bold;
    border-bottom: 2px solid var(--color-main);
  }
  .row.table-title .noti-title {
    justify-content: center;
  }
  .table-item .item-title {
    cursor: pointer;
  }
  .table-item .item-title:hover {
    background-color: var(--color-lightgray);
  }

  .noti-desc {
    background-color: var(--color-lightgray);
    overflow: hidden;
    max-height: 0px;

    transition: 0.3s;
  }
  .noti-desc.open {
    max-height: 100vh;
    height: auto;
  }
  .noti-desc .img-wrap {
    max-width: 661px;
    border-radius: 8px;
    overflow: hidden;
    font-size: 0;
    margin: 16px 16px 0;
  }
  .noti-desc .img-wrap img {
    width: 100%;
  }
  .noti-desc .text {
    width: 100%;
    flex-grow: 1;
    padding: 16px;
  }

  .page-wrap {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  .page-wrap button {
    width: 20px;
    height: 20px;
  }
  .page-wrap button.active,
  .page-wrap button:hover {
    font-weight: bold;
    color: var(--color-main);
    border-bottom: 1px solid var(--color-main);
  }
`;

export default function Notice({ notis, notiCount }) {
  return (
    <NoticeDiv>
      <section className="title-wrap">
        <h2 className="title">가게 공지사항</h2>
        <p className="desc">
          허가낸 닭발 공지사항 입니다. <br />
          가게 일정 및 메뉴에 변동 사항이 생기는 경우 공지사항으로 올라갑니다.
        </p>
      </section>
      <section className="cont-wrap">
        {/* <h3 className="a11y-hidden">공지사항 검색</h3>
        <div className="top-wrap">
          <p className="total">
            총 <data value={notiCount}>{notiCount}</data>개
          </p>
          <form action="">
            <div className="form-wrap">
              <select name="" id="">
                <option value="제목">제목</option>
                <option value="내용">내용</option>
              </select>
              <input type="text" />
              <button>
                <img src="../../imgs/icon-search.svg" alt="검색" />
              </button>
            </div>
          </form>
        </div> */}

        <div>
          <h3 className="a11y-hidden">공지사항 목록</h3>
          <p className="total">
            총 <data value={notiCount}>{notiCount}</data>개
          </p>
          <ul className="table">
            <li className="row table-title">
              <div className="item-title">
                <p className="noti-num">번호</p>
                <p className="noti-title">제목</p>
                <p className="noti-date">작성일</p>
              </div>
            </li>
            {notis.length > 0 ? (
              notis.map((noti) => <NotiItem noti={noti} key={noti.id} />)
            ) : (
              <li>공지가 없습니다.</li>
            )}
          </ul>
        </div>

        {/* <div className="pagenation">
          <ul className="page-wrap">
            <li className="page-item">
              <button>
                <img
                  src="../../imgs/icon-page-first-disabled.svg"
                  alt="처음 페이지"
                />
              </button>
            </li>
            <li className="page-item">
              <button>
                <img
                  src="../../imgs/icon-page-prev-disabled.svg"
                  alt="이전 페이지"
                />
              </button>
            </li>
            <li className="page-item">
              <button className="active">1</button>
            </li>
            <li className="page-item">
              <button>2</button>
            </li>
            <li className="page-item">
              <button>3</button>
            </li>
            <li className="page-item">
              <button>4</button>
            </li>
            <li className="page-item">
              <button>5</button>
            </li>
            <li className="page-item">
              <button>6</button>
            </li>
            <li className="page-item">
              <button>
                <img src="../../imgs/icon-page-next.svg" alt="다음 페이지" />
              </button>
            </li>
            <li className="page-item">
              <button>
                <img src="../../imgs/icon-page-last.svg" alt="마지막 페이지" />
              </button>
            </li>
          </ul>
        </div> */}
      </section>
    </NoticeDiv>
  );
}
