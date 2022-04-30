import styled from "styled-components";

export const CategoryItem = styled.div`
  border-radius: 8px;
  box-shadow: 0px 15px 20px rgba(210, 210, 210, 0.4);
  background-color: lightgray;
  margin: 2rem;
  padding: 2rem;
  width: 400px;
  height: 250px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
`;

export const ActionBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  gap: 40px;
`;
