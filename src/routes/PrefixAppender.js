import React, { useState, useRef } from "react";
import './PrefixAppender.css';

function PrefixAppender() {
	const inputTextareaRef = useRef(null);
	const outputTextareaRef = useRef(null);
	const appenderRef = useRef(null);
	const [value, setValue] = useState("");

	const writeHTML = (msg) => {
		setValue(msg.target.value);
	}

    const append = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

		const replacer = appenderRef.current.value
        var lines = inputTextareaRef.current.value.split('\n');
        for(var i = 0; i < lines.length; i++){
            // code here using lines[i] which will give you each line
            var replacerLinenum = replacer.replaceAll('%n%', i + 1);
            lines[i] = replacerLinenum + lines[i];
        }
        document.getElementById('output').value = lines.join('\n', lines);;
    };

	return (
		<div>
            <h1>Prefix Appender</h1>
            <p>Add text to the beginning of each line. Use %n% to add the line number.</p>
            <div class="appendDiv">
                <form id='append-form' onSubmit={append}>
                    <input
                        ref={appenderRef}
                        type="text"
                        id="inputAppend"
                    ></input>  
                </form>
                <button class="convert" form='append-form' type="submit">Append!</button>
            </div>
			<div class="half-l">
				<h2>Input</h2>
				<textarea
					ref={inputTextareaRef}
					type="text"
					id="input"
					value={value}
					onChange={writeHTML}
				></textarea>
			</div>
			<div class="half-r">
				<h2>Output</h2>
				<textarea
					ref={outputTextareaRef}
					type="text"
					id="output"
				></textarea>
			</div>
		</div>
	);
}

export default PrefixAppender;