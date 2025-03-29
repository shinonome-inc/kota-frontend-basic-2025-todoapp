import Task from "./index";

export default { component: Task };

export const Default = {
    args: {
        onTaskNameChange: (taskName) => {
            console.log("taskName changed:", taskName);
        },
        onTaskComplete: () => {
            console.log("task completed");
        },
        taskName: "harada", 
        defaultIsEditing: false,
    },
};