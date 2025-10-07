import styled from "styled-components";

const MenuDiv = styled.main`
  .title-wrap {
    padding: 60px;
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
  }

  .menu-wrap {
    position: relative;

    background: var(--color-white);
    max-width: 1024px;
    margin: 0 auto;
    padding: 100px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .tab-list {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 16px 72px;
    background: var(--color-white);
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .tab-item button {
    border-radius: 32px;
    font-size: 24px;
    font-weight: bold;
    padding: 8px 32px;

    box-sizing: border-box;
  }
  .tab-item button.active {
    background: var(--color-main);
    color: var(--color-white);
  }
  .tab-item button:hover {
    outline: 1px solid var(--color-main);
  }

  .menu-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  .menu-list {
    margin-top: 10px;
    padding: 20px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 18px;
  }
  .menu-item {
    width: 100%;
    max-width: 232px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid var(--color-lightgray);

    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .menu-item img {
    width: 100%;
    aspect-ratio: 1 /1;
    object-fit: cover;
  }
  .dink .menu-item {
  }

  .info-wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .menu-name {
    font-size: 16px;
    font-weight: bold;
  }
  .menu-name .ex {
    font-size: 12px;
    font-weight: normal;
    margin-left: 4px;
  }
  .menu-name-en {
    font-size: 12px;
    color: var(--color-gray);
    align-self: end;
  }
  .gray-line {
    color: var(--color-gray);
  }
  .menu-price {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default function Menu() {
  return (
    <MenuDiv>
      <section className="title-wrap">
        <h2 className="title">허가낸 메뉴</h2>
        <p className="desc">
          일부 메뉴를 제외한 각격은 1인분 기준이며, 매장에서 드실 시 첫 주문은
          <strong> 동일 메뉴 2인분부터</strong> 주문 가능합니다.
        </p>
      </section>
      <section className="menu-wrap">
        <h3 className="a11y-hidden">메뉴 선택</h3>
        <ul className="tab-list">
          <li className="tab-item ">
            <button className="active">메인</button>
          </li>
          <li className="tab-item">
            <button>후식</button>
          </li>
          <li className="tab-item">
            <button>음료</button>
          </li>
        </ul>

        <div className="drink">
          <h4 className="menu-title">대표</h4>
          <ul className="menu-list">
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="menu-title">고기</h4>
          <ul className="menu-list">
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="menu-title">탕</h4>
          <ul className="menu-list">
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="menu-title">기타</h4>
          <ul className="menu-list">
            <li className="menu-item">
              <div>
                <img src="../../imgs/mm01.jpg" alt="" />
              </div>
              <div className="info-wrap">
                <p className="menu-name">
                  <strong>무뼈닭발</strong>
                </p>
                <p className="menu-name-en">boneless chicken feet</p>
                <hr className="gray-line" />
                <p className="menu-price">
                  <data value="13000">13,000</data>원
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </MenuDiv>
  );
}
