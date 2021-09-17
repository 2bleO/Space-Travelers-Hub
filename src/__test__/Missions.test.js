import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import MissionsPage from '../components/Missions';
import '@testing-library/jest-dom/extend-expect';

describe('Missions', () => {
  test('renders Missions component', () => {
    render(<Provider store={store}><Router><MissionsPage /></Router></Provider>);

    expect(screen.getByText(/Mission/)).toBeInTheDocument();
  });
});
