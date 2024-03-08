import React, { useState, useEffect, useRef } from "react";
import './HTMLEditor.css';

const MIN_TEXTAREA_HEIGHT = 500;

function HTMLEditor() {
	const textareaRef = useRef(null);
	const [value, setValue] = useState("");

	useEffect(() => {
		const textarea = textareaRef.current;
		if (!textarea) return;

		const resizeTextarea = () => {
			textarea.style.height = "auto";
			textarea.style.height = Math.max(textarea.scrollHeight, MIN_TEXTAREA_HEIGHT) + "px";
		};

		textarea.addEventListener("input", resizeTextarea);
		return () => {
			textarea.removeEventListener("input", resizeTextarea);
		};
	}, []);

	const writeHTML = (msg) => {
		document.getElementById('output').innerHTML = msg.target.value;
		setValue(msg.target.value);
	}

	return (
		<div>
			<h1>HTML Editor</h1>
            <p>Test the appearance of HTML code.</p>
			<div class="half-l">
				<h2>Input</h2>
				<textarea
					ref={textareaRef}
					type="text"
					id="input"
					value={value}
					onChange={writeHTML}
					placeholder="Begin by typing some HTML."
				></textarea>
			</div>
			<div class="half-r">
				<h2>Output</h2>
				<div
					id="output"
					contenteditable="true"
				>The formatted output will appear here.
				</div>
			</div>
		</div>
	);
}

export default HTMLEditor;