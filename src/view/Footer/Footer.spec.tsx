import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from "./Footer.view";
import { TodosContext, createStore } from '../../state/store.ts';

let store = createStore();

beforeEach(() => {
  store = createStore()
});

//helper function
function renderComponent() {
  render(
    <TodosContext.Provider value={store}>
      <Footer />
    </TodosContext.Provider>
  );
}

test('controls visible - when some tasks completed', () => {
  store.addTodo('some fake title');
  const { id } = store.todos[0];
  store.toggle(id);
  renderComponent();
  const controls = screen.getByTitle(/controls/i);
  expect(controls).toBeInTheDocument();
});

test('controls should not exist - when no tasks completed', () => {
  store.addTodo('some fake title');
  renderComponent();
  // .getBy throw an error if item doesn't exist
  // .queryBy returns null if item doesn't exist
  const controls = screen.queryByTitle(/controls/i);
  expect(controls).toBeNull();
});

