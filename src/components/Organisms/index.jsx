import styled from "styled-components";
import React, { useState } from "react";
import { AddTaskButton } from "../Atoms/AddTaskButton/index";
import { Task } from "../Molecules/index";
import Input from "../Atoms/Input/index";
import COLOR from "../../variables/color";
import FONTFAMILY from "../../variables/font_family";
import TEXT from "../../variables/texts";

export default function TodoCard() {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTaskList([...taskList, newTask]);
  };

  const onTaskComplete = (index) => {
    taskList.filter((taskList) => !taskList[index]);
  };

  const onTaskNameChange = (value, index) => {};

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        <Task
          key={index}
          onTaskComplete={onTaskComplete(index)}
          onTaskNameChange={onTaskNameChange(value, index)}
          taskName={task.name}
          defaultEditing={task.initializing}
        />
      </StyledTaskList>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;
const StyledTaskList = styled.div``;
