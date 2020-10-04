import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm />)
  })
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  })
});

describe('Contact Me is visable', () => {
  it('inserts text into the links', () => {
    // Arrange
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('contact')).toHaveTextContent('Contact me');
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  })
})