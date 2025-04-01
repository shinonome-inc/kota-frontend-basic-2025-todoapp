import styled from "styled-components";
import React, { useState } from "react";
import { AddTaskButton } from "../Atoms/AddTaskButton/index";
import Task from "../Molecules/index";
import COLOR from "../../variables/color";

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
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const onTaskNameChange = (value, index) => {
    if (value.trim() === "") {
      return setTaskList(taskList.filter((_, i) => i !== index));
    } else {
      return setTaskList(
        taskList.map((task, i) =>
          i === index ? { ...task, name: value, initializing: false } : task
        )
      );
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <div>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  padding: 20px;
`;
