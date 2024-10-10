import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, SetEnteredTask] = useState("");
  function handleChange(event) {
    SetEnteredTask(event.target.value);
  }
  const handleClick=() => {
    if (enteredTask.trim() === "") return;
    onAdd(enteredTask);
    SetEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
