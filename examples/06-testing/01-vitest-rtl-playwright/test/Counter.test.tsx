import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
import { describe, it, expect } from 'vitest';

describe('Counter', () => {
  it('incrementa al hacer click', () => {
    render(<Counter />);
    const btn = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(btn);
    expect(btn).toHaveTextContent('Count: 1');
  });
});
