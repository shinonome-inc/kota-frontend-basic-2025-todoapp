import React from "react";
import styled from "styled-components";
import { Title } from "../../../Atoms/Title/index";
import TodoCard from "../../../components/Organisms/index";

export default function MainPage() {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;
