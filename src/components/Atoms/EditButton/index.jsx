import styled from "styled-components";
import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

export const EditButton = () => {
    return (
        <StyledButton onClick={() => console.log("click")}>
            <Icon/>
        </StyledButton>
    );
}

const Icon = () => {
    return <img src={pencil}/>;
}

const StyledButton = styled.button`
    position: relative;
    font-size: 20px;
    color: ${COLOR.LIGHT_GRAY};
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        background: ${COLOR.LIGHT_GRAY_TRANSPARENT};
        border-radius: 50%;
    }

    &:hover::after {
        background: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    }
`;