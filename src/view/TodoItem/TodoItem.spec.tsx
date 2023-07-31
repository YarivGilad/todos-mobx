import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from "./TodoItem.view"; 
import { ITodo } from "../../types.ts";

test('renders a title', () => {
    const propsObj: ITodo = {
        id:'sa9efya', 
        title: 'check the items', 
        completed: false, 
        show: true 
    };
    render( <TodoItem {...propsObj}/> );
    const divElement = screen.getByText(/the items/i);
    expect(divElement).toBeInTheDocument();
});

test('show delete btn on hover', async () => {
    const propsObj: ITodo = {
        id:'sa9efya', 
        title: 'check the items', 
        completed: false, 
        show: true 
    };
    render( <TodoItem {...propsObj}/> );
    const todoItem = screen.getByTitle(/todo item/i);

    fireEvent.mouseEnter(todoItem);
    const removeIcon = screen.getByTitle(/remove icon/i);
    expect(removeIcon).toBeInTheDocument();
});