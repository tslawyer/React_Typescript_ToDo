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
      <div className={scss.list_container}>
        {todo.map((task) => {
          return <TaskComponent key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default TaskContainer;
