import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const ButtonDiv = styled.div`
  align-self: center;

  a {
    display: flex;
    gap: 4px;
    background-color: var(--color-navi);
    padding: 8px 16px;
    border-radius: 16px;
    color: var(--color-white);
    font-size: 16px;
  }

  a:hover {
    background-color: var(--color-main);
  }
`;

export default function MoreButton({ text, link }) {
  return (
    <ButtonDiv>
      <Link to={link}>{text}</Link>
    </ButtonDiv>
  );
}
