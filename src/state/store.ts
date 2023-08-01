import { makeAutoObservable } from "mobx";
import { ITodo, VisabilityFilter } from "../types.ts";
import { createShortId as shortID } from "../utils/string.utils.ts";
import { createContext } from "react";

interface ITodosStore {
  todos: ITodo[];
  currentFilter: VisabilityFilter;
  addTodo: (title: string) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  removeCompleted: () => void;
  activeCounter: () => number;
  hasCompleted: () => boolean;
  filterTodos: (mode: VisabilityFilter) => void;
}

export class TodosStore implements ITodosStore {
  todos: ITodo[] = [];
  currentFilter: VisabilityFilter = VisabilityFilter.All;

  constructor() {
    makeAutoObservable(this);
    // const annotationsMap = makeAutoObservable(this);
    // console.log({ annotationsMap });
  }
  addTodo = (title: string) => {
    // console.log("addTodo, this:", this);

    this.todos.push({
      id: shortID(),
      title,
      completed: false,
      show: true,
    });
  };

  toggle = (id: string) => {
    this.todos.forEach((todo: ITodo) => {
      if (todo.id === id) todo.completed = !todo.completed;
    });
  };

  remove = (id: string) => {
    const index = this.todos.findIndex((todo: ITodo) => todo.id === id);
    this.todos.splice(index, 1);
  };

  removeCompleted = () => {
    this.todos = this.todos.filter((todo: ITodo) => todo.completed === false);
  };

  activeCounter = () => {
    return this.todos.reduce(
      (total: number, todo: ITodo) => (todo.completed ? total : total + 1),
      0
    );
  };

  hasCompleted = () => {
    return this.todos.some((todo: ITodo) => todo.completed === true);
  };

  filterTodos = (visFilter: VisabilityFilter) => {
    this.currentFilter = visFilter;
    this.todos.forEach((todo: ITodo) => {
      switch (visFilter) {
        case VisabilityFilter.All:
          todo.show = true;
          break;
        case VisabilityFilter.Active:
          todo.show = todo.completed === false;
          break;
        case VisabilityFilter.Completed:
          todo.show = todo.completed === true;
          break;
      }
    });
  };
}

export const TodosContext = createContext<TodosStore | null>(null);
export const createStore = ()=> new TodosStore();
export const store = createStore();

