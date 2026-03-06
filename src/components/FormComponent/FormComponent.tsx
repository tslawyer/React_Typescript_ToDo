import { useForm } from "react-hook-form";
import type { FormInterface } from "../MainComponent/types/types";
import scss from "./FormComponent.module.scss";

interface Props {
  onSubmit: (data: FormInterface) => void;
}

const FormComponent = ({ onSubmit }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormInterface>();

  const submitHandler = (data: FormInterface) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className={scss.form_box}>
      <h2>Create task</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={scss.user_box}>
          <input type="text" required {...register("name")} />
          <label>Task name</label>
        </div>

        <div className={scss.user_box}>
          <input type="text" required {...register("description")} />
          <label>Description</label>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default FormComponent;
