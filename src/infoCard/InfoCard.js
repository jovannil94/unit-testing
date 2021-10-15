import React from 'react';

function InfoCard({text}) {

    const [info, setInfo] = React.useState(text);
    const [buttonText, setButtonText] = React.useState("More Info");

    const replaceText = () => {
        setButtonText("Loading");
        fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then((result) => {
            setInfo(result.fact);
            setButtonText("More Info")
        });
    }

    return (
        <div>
            {text}
            <div data-testid="infoCard_button" onClick={() => replaceText()}>
               {buttonText}
            </div>
        </div>
    );
}

export default InfoCard;