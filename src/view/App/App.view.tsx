import { observer } from "mobx-react-lite"
import { useContext } from "react";
import { Container, ListBox } from "./App.styles";
import { Footer } from "../Footer/Footer.view";
import { EntryForm } from "../EntryForm/EntryForm.view";
import { TodoItem } from "../TodoItem/TodoItem.view";
import { TodosContext, TodosStore } from "../../state/store";

export const App = observer(()=> {

  const {todos} = useContext(TodosContext) as TodosStore

  return (
    <Container>
      <h1>Todo App</h1>
      <ListBox>
        <EntryForm />
        {todos.length > 0 && (
          <>
            <ul>
              {todos.map((todo) => {
                return todo.show && <TodoItem key={todo.id} {...todo} />;
              })}
            </ul>
            <Footer />
          </>
        )}
      </ListBox>
    </Container>
  );
});

