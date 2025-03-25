import styled from "styled-components";
import React from "react";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

export const Checkbox = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            <Check src={check}/>
        </StyledButton>
    );
}

const StyledButton = styled.button`
    width: 20px;
    height: 20px;
    position: relative;
    background: none;
    border: solid 2px;
    border-color: ${COLOR.LIGHT_GRAY};
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const Check = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;