import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from "./App.view"; 
import { TodosContext, createStore } from '../../state/store.ts';

let store = createStore();

beforeEach(() => {
    store = createStore()
});   

//helper function
function renderComponent(){
    render(
        <TodosContext.Provider value={store}>
            <App />
        </TodosContext.Provider>
    );
}
test('footer exists, when items exist', () => {
    store.addTodo('some fake title')
    renderComponent();
    const footer = screen.getByTitle(/footer/i);
    expect(footer).toBeInTheDocument();
});

test('footer hidden, when no items', () => {
    renderComponent();
    const footer = screen.queryByTitle(/footer/i);
    expect(footer).not.toBeInTheDocument();
});
