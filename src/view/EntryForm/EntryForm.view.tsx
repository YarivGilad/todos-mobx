import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { Button } from "../../styles/buttons.styled";
import { MiniForm } from "./EntryForm.styles";
import { TodosContext, TodosStore } from "../../state/store.ts";
import { observer } from "mobx-react-lite";

export const EntryForm = observer(()=> {
  
  const { addTodo } = useContext(TodosContext) as TodosStore

  const inputElm = useRef<HTMLInputElement>(null);
  const [disabled,setDisabled] = useState(true)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputElm.current && inputElm.current.value.length) {
      addTodo(inputElm.current.value);
      inputElm.current.value = "";
    }
  };

  const onChange = (e: ChangeEvent)=> {
    const hasText = !!(e.currentTarget as HTMLInputElement).value.length;
    setDisabled(!hasText)
  }
  return (
    <MiniForm onSubmit={onSubmit}>
      <input ref={inputElm} type="text" placeholder="Your next task" onChange={onChange} />
      <Button disabled={disabled}>add</Button>
    </MiniForm>
  );
});
