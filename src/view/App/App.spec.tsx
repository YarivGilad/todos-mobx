import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from "./App.view"; 
import { useStore, TodosStore } from '../../state/store.ts';

const originalState = useStore.getState();

beforeEach(() => {
  useStore.setState(originalState);
});   
    
test('footer exists, when items exist', () => {
    const todoItem = {
        id: 'gv12jhb',
        title: 'some fake title',
        completed: false,
        show: true
    }
    const state: TodosStore = {...originalState, todos: [todoItem] }
    useStore.setState(state);
    render( <App /> );
    const footer = screen.getByTitle(/footer/i);
    expect(footer).toBeInTheDocument();
});

test('footer hidden, when no items', () => {
    const state: TodosStore = {...originalState, todos: [] }
    useStore.setState(state);
    render( <App /> );
    const footer = screen.queryByTitle(/footer/i);
    expect(footer).not.toBeInTheDocument();
});
