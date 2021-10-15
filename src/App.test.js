import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//
//test('has a div with an id of nameTag with the name Jordan', () => {
//    render(<App />);
//    const nameElement = screen.getByText("Jordan");
//    expect(nameElement).toBeInTheDocument();
//
//    const nameElementbyId = screen.getByTestId("nameTag");
//    expect(nameElementbyId).toBeInTheDocument();
//})