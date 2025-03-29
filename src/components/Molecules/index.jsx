import styled from "styled-components";
import React from "react";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";
import { useState } from "react";

export default function Task({ onTaskNameChange, onTaskComplete, taskName, defaultIsEditing }) {
  
    const [isEditing, setIsEditing] = useState(defaultIsEditing);
  
    const onEditComplete = () => {
        
    };

    const onEditButtonClick = () => {
        
    };
  
    return (
        <StyledWrapper>
            <StyledCheckboxWrapper/>
            {isEditing === "true" ? }
        </StyledWrapper>
    );
}