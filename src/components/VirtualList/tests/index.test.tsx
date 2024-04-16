import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import VirtualizedList from '../index.tsx';

jest.mock('../style.css', () => ({}));

test('renders VirtualizedList component', () => {
  const mockedData = [
    { _id: "1", name: "Item 1", date: 25, month: "July", time: "01:05", location: "Puerto Rico"},
    { _id: "2", name: "Item 2", date: 25, month: "July", time: "01:05", location: "Puerto Rico"},
    { _id: "3", name: "Item 3", date: 25, month: "July", time: "01:05", location: "Puerto Rico"},
  ];
  const { getByTestId } = render(<VirtualizedList ticketData={mockedData}  containerHeight={700} itemHeight={70}/>);
  const virtualizedList = getByTestId('scroll-container');
  expect(virtualizedList).toBeInTheDocument();
});

test('renders fallback content when VirtualizedList receives an empty dataset', () => {
  const { getByTestId } = render(<VirtualizedList ticketData={[]}  containerHeight={700} itemHeight={70}/>);

  const fallbackContent = getByTestId('scroll-container');

  expect(fallbackContent).toBeInTheDocument();
});

test('scrolls VirtualizedList component when user scrolls', () => {
  const mockedData = Array.from({ length: 10000 }, (_, index) => index);
  const { getByTestId } = render(<VirtualizedList ticketData={mockedData}  containerHeight={700} itemHeight={70}/>);

  const listContainer = getByTestId('scroll-container');

  const initialScrollTop = listContainer.scrollTop;

  fireEvent.scroll(listContainer, { target: { scrollTop: initialScrollTop + 100 } });

  const newScrollTop = listContainer.scrollTop;

  expect(newScrollTop).toBeGreaterThan(initialScrollTop);
});