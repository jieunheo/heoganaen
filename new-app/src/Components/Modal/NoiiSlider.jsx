import styled from "styled-components";
import NotiItem from "./NotiCont";

export default function NotiSlider() {
  return (
    <>
      <NotiItem />

      <div>
        <ul className="pagenation">
          <li className="page">
            <button className="active"></button>
          </li>
        </ul>
      </div>
    </>
  );
}
