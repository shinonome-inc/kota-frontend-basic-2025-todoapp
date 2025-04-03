import React from "react";
import styled from "styled-components";
import { Title } from "../../../components/Atoms/Title/index";
import TodoCard from "../../../components/Organisms/TodoCard/index";
import BREAKPOINT from "../../../variables/breakpoint";

export default function MainPage() {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;
