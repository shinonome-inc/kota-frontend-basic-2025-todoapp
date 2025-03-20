import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family"
import BREAKPOINT from "../../../variables/breakpoint"

export const Title = () => {
    return <StyledText>SIMPLE TODO APP</StyledText>;
}

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.M};
  font-family: ${FONTFAMILY.NOTO_SANS};
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}){
    ${TEXT.L};
    font-family: ${FONTFAMILY.ROBOTO};
  }
`;