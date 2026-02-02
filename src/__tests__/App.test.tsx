import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import '@testing-library/jest-dom';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<div>App Test</div>);
    expect(screen.getByText(/App Test/i)).toBeInTheDocument();
  });
});
