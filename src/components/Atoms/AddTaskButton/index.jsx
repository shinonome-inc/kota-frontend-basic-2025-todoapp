import styled from "styled-components";
import React from "react";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const AddTaskButton = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            <Icon/>
            <div>タスクを追加</div>
        </StyledButton>
    );
}

const Icon = () => {
    return <img src={plus}/>;
}

const StyledButton = styled.button`
    position: relative;
    font-family: ${FONTFAMILY.NOTO_SANS};
    color: ${COLOR.GREEN};
    ${TEXT.S};
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    gap: 10px;
    padding: 2px 6px;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${COLOR.LIGHT_GRAY_TRANSPARENT};
        border-radius: 15px;
    }

    &:hover::after {
        background: ${COLOR.GREEN_TRANSLUCENT};
    }
`;