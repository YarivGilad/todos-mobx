import { Box, Button, LinkButton } from "./Footer.styles";
import { TodosContext, TodosStore } from "../../state/store.ts";
import { VisabilityFilter } from "../../types.ts";
import { HBox } from "../../styles/containers.styled";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

export const Footer = observer(() => {

  const { 
    activeCounter,
    currentFilter,
    filterTodos,
    hasCompleted,
    removeCompleted
   } = useContext(TodosContext) as TodosStore

  return (
    <Box title="footer">
      { activeCounter() } items left
      { hasCompleted() &&
        <HBox title="controls">
          {Object.keys(VisabilityFilter).map((visFilter) => (
            <Button key={visFilter}
                    onClick={()=> filterTodos(visFilter as VisabilityFilter)}
                    selected={currentFilter === visFilter}>
              {visFilter}
            </Button>
          ))}
          <LinkButton onClick={removeCompleted}>Clear Completed</LinkButton>
        </HBox> }
    </Box>
  );
});
