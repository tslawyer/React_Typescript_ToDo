import { useState } from "react";
import FormComponent from "../FormComponent/FormComponent";
import scss from "./MainComponent.module.scss";
import type { FormInterface } from "./types/types";
import { nanoid } from "nanoid";

const MainComponent = () => {
  const [todo, setTodo] = useState<FormInterface[]>([]);
  const handleForm = (data: FormInterface) => {
    const newTodoItem = {
      id: nanoid,
      ...data,
    };

    setTodo((prev) => [...prev, newTodoItem]);
    console.log(todo);
  };

  return (
    <div className={scss.container_main}>
      <FormComponent onSubmit={handleForm} />
    </div>
  );
};

export default MainComponent;
