import styled from "styled-components";
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
  .row {
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

export default function Notice({ notis }) {
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
        <h3 className="a11y-hidden">공지사항 검색</h3>
        <div className="top-wrap">
          <p className="total">
            총 <data value="52">52</data>개
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
        </div>

        <div>
          <h3 className="a11y-hidden">공지사항 목록</h3>
          <ul className="table">
            <li className="row table-title">
              <p className="noti-num">번호</p>
              <p className="noti-title">제목</p>
              <p className="noti-date">작성일</p>
              <p className="noti-count">조회</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내{" "}
                <img src="../../imgs/icon-img.svg" alt="" />
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
            <li className="row">
              <p className="noti-num">1</p>
              <p className="noti-title">
                [공지] 2025년 추석 연휴 기간 영업일 안내
              </p>
              <p className="noti-date">2025.10.10</p>
              <p className="noti-count">312</p>
            </li>
          </ul>
        </div>

        <div className="pagenation">
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
        </div>
      </section>
    </NoticeDiv>
  );
}
