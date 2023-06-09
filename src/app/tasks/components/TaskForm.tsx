"use client";
import { HiXMark } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTask } from "../features/taskSlice";
import { ChangeEvent, FormEvent, useState } from "react";
import TaskDto from "../dto/taskDto";

type Props = {
  showTaskForm: boolean;
  changeShowTaskForm: () => any;
};

export default function TaskForm({ showTaskForm, changeShowTaskForm }: Props) {
  const [task, setTask] = useState({ id: 0, description: "" });
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);

  if (showTaskForm === false) return <></>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      id: tasks.length + 1,
    });
  };

  //Cerrar el modal
  const handleClose = () => {
    changeShowTaskForm();
  };

  //Una validación sencilla, ya que no contamos con una entidad con varios valores.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.description.trim() == "") {
      alert("Description is required");
    } else {
      dispatch(addTask(task));
      changeShowTaskForm();
    }
  };

  return (
    <section className="z-50 fixed inset-0 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-80">
      <div className="px-4 w-full max-w-md max-h-screen sm:max-w-xl">
        <div className="relative bg-white rounded-2xl shadow-lg">
          <div className="text-blue-600 flex justify-between items-start p-5 rounded-t border-b">
            <h3>Add New Task</h3>
            <button
              onClick={handleClose}
              className="text-blue-400 bg-red-600 hover:bg-red-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <HiXMark className="w-5 h-5 text-red-100" />
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    className="block text-xs font-medium text-left text-gray-500 uppercase mb-1"
                    htmlFor="description"
                  >
                    Description:
                  </label>
                  <input
                    name="description"
                    required
                    type="text"
                    maxLength={30}
                    className="appearance-none block w-full text-gray-900 focus:border-blue-600 shadow-sm border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pt-6 flex justify-center items-center rounded-b border-t border-gray-200">
                <button className="w-48 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 shadow-md shadow-gray-300 text-white tracking-wide font-medium">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
