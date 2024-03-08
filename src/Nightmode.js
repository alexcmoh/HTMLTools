import './Nightmode.css';
import React from "react";

const Nightmode = () => {

    const handleClick = (arg) => {
        switch (arg) {
            case '1':
                document.body.style.backgroundColor = '#D9B99B';
                break;
            case '2':
                document.body.style.backgroundColor = '#282C34';
                break;
            case '3':
                document.body.style.backgroundColor = '#000000';
                break;
            default:
                document.body.style.backgroundColor = '#282C34';
        }
    };

    return (
        <div class="nightmode-corner">
            <button class="bgColorShifter day"     onClick={() => handleClick('1')}></button>
            <button class="bgColorShifter night1"   onClick={() => handleClick('2')}></button>
            <button class="bgColorShifter night2"   onClick={() => handleClick('3')}></button>
        </div>
    );
}
export default Nightmode;