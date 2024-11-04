import { useState } from "react";
function Todo(){
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    function inputc(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");

        }
    }
    function deleteTask(index){
        const updateTask = task.filter((element,i) => i!==index);
        setTask(updateTask);
    }
    return(
        <div className="font-mono">
            <h1 className="font-bold text-center text-5xl py-5">To Do List</h1>
            <div className="flex justify-center">
                <input className="px-2 py-3 w-64 border border-black border-e-0" type="text" placeholder="Enter a task..."  value={newTask} onChange={inputc}/>
                <button className="bg-green-600 w-24" onClick={addTask}>ADD</button>
            </div>
            <div className="w-full justify-center flex">
            <ol className="border-2 flex-col justify-center w-[22rem]">
                {task.map((task, index) => <li className="hover:line-through hover:cursor-pointer p-2 border-b" value={index} onClick={() =>deleteTask(index)}>{task}</li>)}
            </ol>
            </div>
            
        </div>
    )
}
export default Todo;