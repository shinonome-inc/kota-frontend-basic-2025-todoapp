import styled from "styled-components";
import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

export const EditButton = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            <Icon src={pencil}/>
        </StyledButton>
    );
}

const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

const StyledButton = styled.button`
    width: 20px;
    height: 20px;
    color: ${COLOR.LIGHT_GRAY};
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
        border-radius: 50%;
    }
`;