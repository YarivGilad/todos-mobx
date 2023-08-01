import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EntryForm } from "./EntryForm.view";
import { TodosContext, createStore } from '../../state/store.ts';

let store = createStore();

beforeEach(() => {
    store = createStore()
});

test('Button disabled - when input text is empty', () => {
    // Arrange
    render(
        <TodosContext.Provider value={store}>
            <EntryForm />
        </TodosContext.Provider>
    );

    const input = screen.getByPlaceholderText(/your next task/i) as HTMLInputElement;
    console.log(input.value);

    // const button = screen.getByText(/add/i);
    const button = screen.getByRole('button');

    // Assert
    expect(button).toBeDisabled();
});

test('Button enabled - when input text is not empty', () => {
    // Arrange
    render(
        <TodosContext.Provider value={store}>
            <EntryForm />
        </TodosContext.Provider>
    );

    const input = screen.getByPlaceholderText(/your next task/i) as HTMLInputElement;
    const button = screen.getByRole('button');

    // Act 
    fireEvent.change(input, { target: { value: 'buy milk' } })

    // Assert
    expect(button).not.toBeDisabled();
});