// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NonceToken title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NonceToken/i);
    expect(titleElement).toBeInTheDocument();
});
