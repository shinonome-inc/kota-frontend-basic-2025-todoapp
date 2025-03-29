import styled from "styled-components";
import React, { useState }  from "react";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

export default function Task({ onTaskNameChange, onTaskComplete, taskName, defaultIsEditing }) {
  
    const [isEditing, setIsEditing] = useState(defaultIsEditing);
  
    const onEditComplete = (value) => {
        setIsEditing(false);
        onTaskNameChange(value);
    };

    const onEditButtonClick = () => {
        setIsEditing(true);
    };
  
    return (
        <StyledWrapper>
            <StyledCheckboxWrapper onClick = { onTaskComplete }/>
            {isEditing === "true" ? 
                onEditComplete = {onEditComplete} defaultValue = {taskName}:
                <StyledNameAndButtonWrapper>
                    <StyledTaskName>{taskName}</StyledTaskName>
                    <StyledEditButtonWrapper onClick = { onEditButtonClick }/>
                </StyledNameAndButtonWrapper>
            }
        </StyledWrapper>
    );
}