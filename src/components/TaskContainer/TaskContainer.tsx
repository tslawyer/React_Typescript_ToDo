import scss from "./TaskContainer.module.scss";
import TaskComponent from "../TaskComponent/TaskComponent";
import type { TodoItem } from "../MainComponent/types/types";

interface Props {
  todo: TodoItem[];
}

const TaskContainer = ({ todo }: Props) => {
  return (
    <div className={scss.task_container}>
      <h2>Your tasks</h2>
      <div
        className={`${scss.list_container} ${todo.length === 0 ? scss.empty : ""}`}
      >
        {todo.length > 0 ? (
          todo.map((task) => <TaskComponent key={task.id} task={task} />)
        ) : (
          <h3>No task added yet</h3>
        )}
      </div>
    </div>
  );
};

export default TaskContainer;
