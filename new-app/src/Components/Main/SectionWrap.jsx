import styled from "styled-components";

const SectionDiv = styled.section`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;

  .btn-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function SectionWrap({ title, desc, children }) {
  return (
    <SectionDiv>
      <h2>{title}</h2>
      {desc}
      {children}
    </SectionDiv>
  );
}
