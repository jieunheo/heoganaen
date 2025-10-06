import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const HeaderDiv = styled.header`
  .header-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
    padding: 10px 0;
  }
  .logo img {
    width: 200px;
  }

  .gnb ul {
    display: flex;
    gap: 30px;
  }

  .gnb-item {
    color: var(--color-black);
    font-weight: bold;
    font-size: 24px;
  }

  .gnb-item a {
    padding: 8px;
  }

  .gnb-item a:hover {
    color: var(--color-main);
    border-bottom: 2px solid var(--color-main);
  }
`;

function Header() {
  return (
    <HeaderDiv>
      <div className="header-wrap">
        <h1 className="logo">
          <img src="./imgs/logo.png" alt="허가낸 닭발" />
        </h1>
        <nav className="gnb">
          <ul>
            <li className="gnb-item">
              <Link to="/">브랜드</Link>
            </li>
            <li className="gnb-item">
              <Link to="/menu">메뉴</Link>
            </li>
            <li className="gnb-item">
              <Link to="/notice">공지사항</Link>
            </li>
            <li className="gnb-item">
              <Link to="/#directions">오시는 길</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderDiv>
  );
}

export default Header;
