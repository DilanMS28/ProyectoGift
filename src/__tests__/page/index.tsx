import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
 
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
  
describe('Home Component', () => {
  const initialState = { gifStore:{ gifs: [] } };
  const mockStore = configureStore();
  let store;
  test('renders Gif Market title', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const title = screen.getByText(/Gif Market/i);
    expect(title).toBeInTheDocument();
  });

  test('renders SearchBar component', () => {
     store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const searchBar = screen.getAllByLabelText(/search/i);
    expect(searchBar[0]).toBeInTheDocument();
  }) 
  
  test('renders GifList component', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const gifList = screen.getByTestId('gif-list');
    expect(gifList).toBeInTheDocument();
  });
});