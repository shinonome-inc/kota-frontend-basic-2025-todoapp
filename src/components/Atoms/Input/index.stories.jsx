import Input from "./index";

export default { component: Input };

export const Default = {
    args: {
        defaultValue: "",
        onEditComplete: (ref) => {
            console.log("edit complete:", ref);
        },
    },
};