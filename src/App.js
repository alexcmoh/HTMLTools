import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './routes/About';
import HTML_Editor from './routes/HTML_Editor';
import Home from './routes/Home';
import Navbar from './Navbar';

function App() {
  return (
    <>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/html_editor" element={<HTML_Editor />} />
		</Routes>
    </>
  );
}

export default App;
