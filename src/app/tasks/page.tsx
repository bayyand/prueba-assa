import Header from "../components/Header";
import TaskList from "./components/TaskList";

export default function IndexTasks() {
  return (
    <>
      <Header section="Tasks" />
      <main>
        <TaskList />
      </main>
    </>
  );
}
