import { useContext, useState } from "react";
import {
  TodoItemBox,
  Check,
  Uncheck,
  Remove,
  TodoTitle
} from "./TodoItem.styles";
import { ITodo } from "../../types.ts";
import { TodosContext, TodosStore } from "../../state/store.ts";
import { observer } from "mobx-react-lite";

export const TodoItem = observer(({ id, completed, title }: ITodo)=> {

  const { toggle, remove } = useContext(TodosContext) as TodosStore;
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <TodoItemBox title="todo item"
                 onMouseEnter={() => setHovered(true)} 
                 onMouseLeave={() => setHovered(false)}>
      <div onClick={() => toggle(id)}>
        {completed ? <Check /> : <Uncheck />}
      </div>
      <TodoTitle $completed={completed}>{title}</TodoTitle>
      { hovered && <Remove onClick={() => remove(id)} title="remove icon" /> }
    </TodoItemBox>
  );
});
