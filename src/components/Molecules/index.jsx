import styled from "styled-components";
import React, { useState }  from "react";
import { Checkbox } from "../Atoms/Checkbox/index";
import { EditButton } from "../Atoms/EditButton/index";
import Input from "../Atoms/Input/index";
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
            <StyledCheckboxWrapper>
                <Checkbox onClick = { onTaskComplete }/>
            </StyledCheckboxWrapper>
            {isEditing === "true" ? 
                <Input onEditComplete = {onEditComplete} defaultValue = {taskName}/>:
                <StyledNameAndButtonWrapper>
                    <StyledTaskName>{taskName}</StyledTaskName>
                    <StyledEditButtonWrapper>
                        <EditButton onClick = { onEditButtonClick }/>
                    </StyledEditButtonWrapper>
                </StyledNameAndButtonWrapper>
            }
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    
`
const StyledCheckboxWrapper = styled.div`
    
`
const StyledNameAndButtonWrapper = styled.div`
    
`
const StyledTaskName = styled.div`
    
`
const StyledEditButtonWrapper = styled.div`
    
`