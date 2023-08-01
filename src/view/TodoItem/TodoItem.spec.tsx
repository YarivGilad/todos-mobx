import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from "./TodoItem.view"; 
import { ITodo } from "../../types.ts";
import { TodosContext, createStore } from '../../state/store.ts';

let store = createStore();

beforeEach(() => {
    store = createStore()
});   

//helper function
function renderComponent(propsObj: ITodo){
    render(
        <TodosContext.Provider value={store}>
            <TodoItem {...propsObj}/>
        </TodosContext.Provider>
    );
}

test('renders a title', () => {
    const propsObj = {
        id:'sa9efya', 
        title: 'check the items', 
        completed: false, 
        show: true 
    };
    renderComponent(propsObj);
    const divElement = screen.getByText(/the items/i);
    expect(divElement).toBeInTheDocument();
});

test('show delete btn on hover', async () => {
    const propsObj = {
        id:'sa9efya', 
        title: 'check the items', 
        completed: false, 
        show: true 
    };
    renderComponent(propsObj);
    const todoItem = screen.getByTitle(/todo item/i);

    fireEvent.mouseEnter(todoItem);
    const removeIcon = screen.getByTitle(/remove icon/i);
    expect(removeIcon).toBeInTheDocument();
});