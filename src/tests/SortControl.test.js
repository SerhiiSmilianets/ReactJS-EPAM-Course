import React from 'react';
import { render, screen } from '@testing-library/react';
import SortControl from '../components/SortControl';

describe('SortControl', () => {
    it('renders with the correct initial value', () => {
        const handleChange = jest.fn();
        render(<SortControl selectedSorting="title" onChange={handleChange} />);
        const select = screen.getByRole('combobox');
        expect(select.value).toBe('title');
      });
});
