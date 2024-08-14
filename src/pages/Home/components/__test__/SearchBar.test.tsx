import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SearchBar from '../SearchBar.tsx';

describe('SearchBar', () => {

    beforeEach(() => {
        cleanup();
    })

    it('renders input and button', () => {
        render(<SearchBar value="" onValueChange={() => {
        }} onSearchClick={() => {
        }}/>);
        expect(screen.getByPlaceholderText('Input movie title to search...')).toBeDefined();
        expect(screen.getByText('Search')).toBeDefined();
    });

    it('calls onValueChange when input value changes', () => {
        const handleValueChange = vi.fn();
        render(<SearchBar value="" onValueChange={handleValueChange} onSearchClick={() => {
        }}/>);
        fireEvent.change(screen.getByPlaceholderText('Input movie title to search...'), { target: { value: 'Inception' } });
        expect(handleValueChange).toHaveBeenCalled();
    });

    it('calls onSearchClick when search button is clicked', () => {
        const handleSearchClick = vi.fn();
        render(<SearchBar value="" onValueChange={() => {
        }} onSearchClick={handleSearchClick}/>);
        fireEvent.click(screen.getByText('Search'));
        expect(handleSearchClick).toHaveBeenCalled();
    });

    it('displays the correct value in the input', () => {
        render(<SearchBar value="Inception" onValueChange={() => {
        }} onSearchClick={() => {
        }}/>);
        expect(screen.getByDisplayValue('Inception')).toBeDefined();
    });
});