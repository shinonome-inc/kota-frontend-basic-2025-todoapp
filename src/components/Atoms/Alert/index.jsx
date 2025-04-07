import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

export default function Alert({ visible, errorText }) {
  return (
    <StyledAlertWrapper visible={visible}>
      <StyledAlert>{errorText}</StyledAlert>
    </StyledAlertWrapper>
  );
}

const StyledAlertWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 80px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  width: 400px;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.visible ? "translate(-50%, 40%)" : "translate(-50%, 0)"};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    max-width: 280px;
    width: 100%;
  }
`;

const StyledAlert = styled.div`
  padding: 10px 20px;
  color: ${COLOR.WHITE};
  ${TEXT.S};
  font-family: ${FONTFAMILY.NOTO_SANS};
  text-align: center;
`;
