import { useState } from "react";
import TaskForm from "../task-form/task-form";
import TaskList from "../task-list/task-list";

const TodoList = () => {

    const [list, setList] = useState([]);

    const updateList = (newtask) => {
        setList(list => [...list, newtask]);
    };

    return (
        <>
            <h1>TO DO LIST</h1>
            <h3>add a new task</h3>
            <TaskForm updateList={updateList} />
            <h3>Task List</h3>
            <TaskList taskList={list} />
        </>
    );

};


export default TodoList;