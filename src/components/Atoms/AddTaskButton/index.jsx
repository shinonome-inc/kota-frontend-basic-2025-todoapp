import styled from "styled-components";
import React from "react";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const AddTaskButton = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            <Icon src={plus}/>
            <div>タスクを追加</div>
        </StyledButton>
    );
}

const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

const StyledButton = styled.button`
    font-family: ${FONTFAMILY.NOTO_SANS};
    color: ${COLOR.GREEN};
    ${TEXT.S};
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px 6px;

    &:hover {
        background: ${COLOR.GREEN_TRANSLUCENT};
        border-radius: 12px;
    }
`;