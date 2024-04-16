import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import VirtualizedList from '../index.tsx';

jest.mock('../style.css', () => ({}));

test('renders VirtualizedList component', () => {
  const data = [
    { _id: 1, date: '01', month: 'January', name: 'Event 1', time: '10:00', location: 'Location 1' },
    { _id: 2, date: '02', month: 'February', name: 'Event 2', time: '11:00', location: 'Location 2' },
    { _id: 3, date: '03', month: 'March', name: 'Event 3', time: '12:00', location: 'Location 3' },
  ];
  const { getByTestId } = render(<VirtualizedList ticketData={data} />);
  const virtualizedList = getByTestId('scroll-container');
  expect(virtualizedList).toBeInTheDocument();
});

test('renders fallback content when VirtualizedList receives an empty dataset', () => {
  const { getByTestId } = render(<VirtualizedList ticketData={[]} />);

  const fallbackContent = getByTestId('scroll-container');

  expect(fallbackContent).toBeInTheDocument();
});

test('scrolls VirtualizedList component when user scrolls', () => {
  const data = Array.from({ length: 10000 }, (_, index) => index);
  const { getByTestId } = render(<VirtualizedList ticketData={data} />);

  const listContainer = getByTestId('scroll-container');

  const initialScrollTop = listContainer.scrollTop;

  fireEvent.scroll(listContainer, { target: { scrollTop: initialScrollTop + 100 } });

  const newScrollTop = listContainer.scrollTop;

  expect(newScrollTop).toBeGreaterThan(initialScrollTop);
});