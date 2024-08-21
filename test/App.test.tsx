import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { it, describe, expect } from 'vitest';
import { Provider } from 'react-redux';
import store from '../src/store';

describe('App', () => {
  it('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Users List/i);
    expect(linkElement).toBeTruthy();
  });
});
