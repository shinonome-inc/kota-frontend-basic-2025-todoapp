import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

export default function Alert({ isActive }) {
  return (
    <StyledAlert isActive={isActive}>
      タスクの名前が設定されていません。
    </StyledAlert>
  );
}

const StyledAlert = styled.div`
  position: absolute;
  left: 50%;
  top: 80px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.RED};
  padding: 10px 20px;
  ${TEXT.S};
  font-family: ${FONTFAMILY.NOTO_SANS};
  border-radius: 4px;
  max-width: 400px;
  text-align: center;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.isActive ? "translate(-50%, -40%)" : "translate(0, 0)"};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    margin: 0 20px;
  }
`;
