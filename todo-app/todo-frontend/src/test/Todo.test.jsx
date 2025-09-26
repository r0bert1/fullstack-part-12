import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Todo from '../Todos/Todo';

const todo = { text: 'Add running test to image build process', done: false }

test('Displays todo text', () => {
  render(<Todo todo={todo} onClickComplete={vi.fn()} onClickDelete={vi.fn()} />);
  expect(screen.getByText('Add running test to image build process')).toBeInTheDocument();
});