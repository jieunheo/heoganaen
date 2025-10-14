import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const FooterDiv = styled.footer`
  background-color: var(--color-navi);
  color: var(--color-white);

  .footer-content {
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 50px 0;
    gap: 20px;
  }

  .footer-wrap {
    width: 100%;
    display: flex;
    align-items: top;
    justify-content: space-between;
  }

  .info-wrap {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .footer-logo {
    width: 200px;
  }

  .footer-gnb ul {
    display: flex;
    gap: 16px;
  }

  .gnb-item {
    font-weight: bold;
    font-size: 16px;
    padding: 8px 0;
  }

  .addr-list {
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-style: normal;
    font-size: 14px;
  }

  .copy {
    align-self: center;
    font-size: 14px;
  }
  .copy span {
    font-weight: bold;
  }
`;

function Footer({ infos }) {
  console.log(infos);

  const instaUrl =
    "https://www.instagram.com/heoganean_jeonju/?igsh=MWlzb2dpdnR1dXZodA%3D%3D&utm_source=qr#";
  return (
    <FooterDiv>
      <h2 className="a11y-hidden">푸터 가게 정보 및 글로벌 메뉴</h2>
      <div className="footer-content">
        <div className="footer-wrap">
          <div className="info-wrap">
            <Link to="/">
              <img
                className="footer-logo"
                src="./imgs/footer-logo.png"
                alt="허가낸닭발"
              />
            </Link>
            <h3 className="a11y-hidden">하단 글로벌 메뉴</h3>
            <nav className="footer-gnb">
              <ul>
                <li className="gnb-item">
                  <Link to="/">메인</Link>
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
            <address>
              <h3 className="a11y-hidden">가게 정보</h3>
              <ul className="addr-list">
                <li>{infos?.address?.value}</li>
                <li>
                  사업자번호: {infos?.bus_num?.value} ({infos?.master?.value})
                </li>
                <li>
                  전화번호:{" "}
                  <a
                    href={`tel:${infos?.number?.value
                      .replace(")", "")
                      .replace("-", "")}`}
                  >
                    {infos?.number?.value}
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <h3 className="a11y-hidden">sns 정보</h3>
          <a href={infos?.insta?.value} target="_blank">
            <img src="./imgs/icon-insta.svg" alt="insta" />
          </a>
        </div>
        <small className="copy">
          Copyright © <span>{infos?.copy?.value}</span> All Rights Reserved.
        </small>
      </div>
    </FooterDiv>
  );
}

export default Footer;
