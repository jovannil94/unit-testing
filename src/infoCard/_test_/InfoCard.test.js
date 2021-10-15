import {render, screen} from '@testing-library/react';

import InfoCard from '../InfoCard';

test('Infocard renders correctly', () => {
    render(<InfoCard />);
})

test('Infocard has text at top of card' , () => {
    render(<InfoCard text="This is some info on the Infocard"/>);
    const infoTextElement = screen.getByText('This is some info on the Infocard');

    expect(infoTextElement).toBeInTheDocument();
})

test('Infocard has call to action button', () =>{
    render(<InfoCard />);

    const buttonByTestId = screen.getByTestId("infoCard_button");

    expect(buttonByTestId).toBeInTheDocument();

    const buttonText = screen.getByText("More Info");

    expect(buttonText).toBeInTheDocument();
})

test("text changes on click of more info button", () => {
    render(<InfoCard text="This is the starting text" />);

    const getInitialText = screen.getByText("This is the starting text");

    expect(getInitialText).toBeInTheDocument();

    //simulate clicking the button

    const button = screen.getByTestId("infoCard_button");
    button.click();

    const getTextAfterClick = screen.getByText("This is the text after clicking.");
    expect(getTextAfterClick).toBeInTheDocument();
//    expect(getInitialText).toBeInTheDocument();
})

test("check for asynchronous change in text on button click", async () => {
    render(<InfoCard text="Click button for amazing cat fact"/>);

    const button = screen.getByTestId("infoCard_button");

    expect(button).toHaveTextContent("More Info");

    button.click();

    expect(button).toHaveTextContent("Loading");

    await screen.findByText("More Info");

    expect(button).toHaveTextContent("More Info");
})