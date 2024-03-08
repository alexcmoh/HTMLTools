import './App.css';
import {Routes, Route } from 'react-router-dom';
import About from './routes/About';
import HTMLEditor from './routes/HTMLEditor';
import Home from './routes/Home';
import PrefixAppender from './routes/PrefixAppender';
import Navbar from './Navbar';

function App() {
  return (
    <>
		<Navbar />
		<Routes>
			<Route index element={<HTMLEditor />} />
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/html_editor" element={<HTMLEditor />} />
			<Route path="/prefix_appender" element={<PrefixAppender />} />
		</Routes>
    </>
  );
}

export default App;
