import styled from "styled-components";
import React, { useState } from "react";
import { Checkbox } from "../Atoms/Checkbox/index";
import { EditButton } from "../Atoms/EditButton/index";
import Input from "../Atoms/Input/index";
import COLOR from "../../variables/color";
import FONTFAMILY from "../../variables/font_family";
import TEXT from "../../variables/texts";

export default function Task({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) {
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
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 6px;
`;
const StyledCheckboxWrapper = styled.div`
  margin-right: 10px;
`;
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledTaskName = styled.div`
  margin-right: 10px;
  width: 100%;
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
  padding: 0 4px;
`;
const StyledEditButtonWrapper = styled.div`
  align-items: center;
`;
