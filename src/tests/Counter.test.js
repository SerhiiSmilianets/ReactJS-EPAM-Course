import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from "../components/Counter";

describe('Counter', () => {
  it('should render initial value provided in props', () => {
    render(<Counter count={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('decrements the displayed value when "decrement" button is clicked', () => {
    render(<Counter count={5} />);
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('increments the displayed value when "increment" button is clicked', () => {
    render(<Counter count={5} />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});
