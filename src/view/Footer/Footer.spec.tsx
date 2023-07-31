import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from "./Footer.view"; 
import { useStore, TodosStore } from '../../state/store.ts';


const originalState = useStore.getState();

beforeEach(() => {
  useStore.setState(originalState);
});

test('controls visible - when some tasks completed', () => {
    const state: TodosStore = {...originalState, hasCompleted:()=> true }
    useStore.setState(state);
    render( <Footer /> );
    const controls = screen.getByTitle(/controls/i);
    expect(controls).toBeInTheDocument();
});

test('controls should not exist - when no tasks completed', () => {
    const state: TodosStore = {...originalState, hasCompleted:()=> false }
    useStore.setState(state);
    render( <Footer /> );
    // .getBy throw an error if item doesn't exist
    // .queryBy return null if item doesn't exist
    const controls = screen.queryByTitle(/controls/i);
    expect(controls).toBeNull();
});

