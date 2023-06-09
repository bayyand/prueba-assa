"use client";
import { useAppSelector } from "@/redux/hooks";
import TaskForm from "./TaskForm";
import { useState } from "react";

export default function TaskList() {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const tasks = useAppSelector((state) => state.tasks);
  return (
    <>
      <TaskForm
        showTaskForm={showTaskForm}
        changeShowTaskForm={() => setShowTaskForm(!showTaskForm)}
      />
      <section className="mt-6 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setShowTaskForm(true)}
          className="w-48 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 shadow-md shadow-gray-300 text-white tracking-wide font-medium"
        >
          New Task
        </button>
        <div className="mt-6 grid grid-cols-1 gap-2 text-center">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-slate-100 rounded-lg text-blue-600 shadow-md shadow-gray-300 py-3 font-semibold w-72 max-w-xs tracking-tight text-sm"
            >
              {task.description}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
