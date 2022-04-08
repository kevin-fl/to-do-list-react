import { useState } from "react";

const TaskForm = ({ updateList }) => {


    const [taskname, setTaskname] = useState("");
    const [taskdesc, setTaskDesc] = useState("");
    const [taskpriority, setTaskPriority] = useState("basic");


    const handleSubmit = (e) => {

        e.preventDefault();

        updateList({ taskname, taskdesc, taskpriority });

    };


    return (


        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="taskname">nom</label>
                <input type="text" name="name" id="taskname" value={taskname} required
                    onChange={(e) => setTaskname(e.target.value)} />
            </div>

            <div>
                <label htmlFor="taskdesc">description</label>
                <textarea name="description" id="taskdesc" value={taskdesc} cols="30" rows="3"
                    onChange={(e) => setTaskDesc(e.target.value)} />



            </div>

            <div>
                <label htmlFor="taskpriority">priority</label>
                <select name="priority" id="taskpriority" value={taskpriority}
                    onChange={(e) => setTaskPriority(e.target.value)} >
                    <option value="low">low</option>
                    <option value="basic">basic</option>
                    <option value="high">high</option>
                </select>
            </div>
            <button type="submit">add</button>

        </form>

    );


};

export default TaskForm;






