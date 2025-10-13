import { useEffect, useState } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import MenuTab from "./MenuTab";

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

    align-self: end;
  }
`;

// const titleArray = {
//   main: "메인",
//   meat: "고기류",
//   soup: "국물류",
//   etc: "기타",
//   noodle: "면류",
//   rice: "밥류",
//   alcohol: "주류",
//   Makgeolli: "막걸리",
//   drink: "음료",
// };

export default function Menu() {
  const [allMenus, setAllMenus] = useState(null);
  const [currentMenu, setCurrentMenu] = useState("main");
  const [cates, setCates] = useState({});
  const [loading, setLoading] = useState(true);
  // console.log(viewMenus);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "http://heoganaen.dothome.co.kr/api/getMenu.php"
        );
        if (!res.ok)
          throw new Error("데이터를 가져오는 중 문제가 발생했습니다.");
        const data = await res.json();

        console.log(data);

        const allMenuData = data.menus;

        setAllMenus(allMenuData);
        setLoading(false);
        setCates({
          main: [...data["cates"]["main"]],
          sub: [...data["cates"]["sub"]],
        });
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  function handleMenu(type) {
    console.log(allMenus[type]);

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
        <MenuTab
          tabs={cates?.main}
          currentMenu={currentMenu}
          handleMenu={handleMenu}
        />
        {loading ? (
          <div>로딩 중...</div>
        ) : (
          <>
            {cates["sub"].map((cate) => {
              console.log(cate);
              if (currentMenu === cate["name"])
                return (
                  <div
                    key={cate["sub_name"]}
                    className={currentMenu === "drink" ? "drink" : ""}
                  >
                    <h4 className="menu-title">{cate["ko_name"]}</h4>
                    <ul className="menu-list">
                      {allMenus[currentMenu].map((item) => {
                        if (item.sub === cate["sub_name"])
                          return <MenuItem key={item.id} item={item} />;
                      })}
                    </ul>
                  </div>
                );
            })}
          </>
        )}
      </section>
    </MenuDiv>
  );
}
