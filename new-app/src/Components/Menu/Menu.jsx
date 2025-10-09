import { useEffect, useState } from "react";
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
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(4, minmax(232px, 1fr));
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

    transition: 0.2s;
    cursor: pointer;
  }
  .menu-item:hover {
    transform: translateY(-2%);
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

const titleArray = {
  main: "메인",
  meat: "고기류",
  soup: "국물류",
  etc: "기타",
  noodle: "면류",
  rice: "밥류",
  alcohol: "주류",
  Makgeolli: "막걸리",
  drink: "음료",
};

export default function Menu() {
  const [allMenus, setAllMenus] = useState(null);
  const [viewMenus, setViewMenus] = useState([]);
  const [currentMenu, setCurrentMenu] = useState("main");
  const [cates, setCates] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(viewMenus);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "http://heoganaen.dothome.co.kr/api/getMenu.php"
        );
        if (!res.ok)
          throw new Error("데이터를 가져오는 중 문제가 발생했습니다.");
        const data = await res.json();

        const allMenuData = data.data.sort((a, b) => {
          return a.order - b.order;
        });

        setAllMenus(allMenuData);
        setLoading(false);
        settingMenu(allMenuData);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, [currentMenu]);

  function settingMenu(allMenuData) {
    let datas;
    if (allMenus) datas = allMenus;
    else datas = allMenuData;

    let category = [];
    const filter = datas.filter((item) => {
      if (item.type === currentMenu) {
        category = category ? [...category, item.sub] : [item.sub];
        return true;
      }
    });
    setCates([...new Set(category)]);
    setViewMenus([...filter]);
  }

  function handleMenu(type) {
    setCurrentMenu(type);
  }

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
            <button
              className={currentMenu === "main" ? "active" : ""}
              onClick={() => handleMenu("main")}
            >
              메인
            </button>
          </li>
          <li className="tab-item">
            <button
              className={currentMenu === "dessert" ? "active" : ""}
              onClick={() => handleMenu("dessert")}
            >
              후식
            </button>
          </li>
          <li className="tab-item">
            <button
              className={currentMenu === "drink" ? "active" : ""}
              onClick={() => handleMenu("drink")}
            >
              음료
            </button>
          </li>
        </ul>
        {loading ? (
          <div>로딩 중...</div>
        ) : (
          <>
            {cates.map((cate) => (
              <div className={currentMenu === "drink" ? "drink" : ""}>
                <h4 className="menu-title">{titleArray[cate]}</h4>
                <ul className="menu-list">
                  {viewMenus.map((item) => {
                    if (item.sub === cate)
                      return (
                        <li className="menu-item" key={item.id}>
                          {item.url && (
                            <div>
                              <img src={item.url} alt={item.name} />
                            </div>
                          )}
                          <div className="info-wrap">
                            <p className="menu-name">
                              <strong>{item.name}</strong>
                              {item.desc && (
                                <span className="ex">({item.desc})</span>
                              )}
                            </p>
                            <p className="menu-name-en">{item["en_name"]}</p>
                            <hr className="gray-line" />
                            <p className="menu-price">
                              <data value={item.price}>{+item.price}</data>원
                            </p>
                          </div>
                        </li>
                      );
                  })}
                </ul>
              </div>
            ))}
          </>
        )}
      </section>
    </MenuDiv>
  );
}
