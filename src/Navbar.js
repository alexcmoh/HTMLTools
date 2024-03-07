import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
      return (
            <div>
                  <Link to="/"><button>Home</button></Link>
                  <Link to="/about"><button>About</button></Link>
                  <Link to="/html_editor"><button>HTML  Editor</button></Link>
            </div>
      );
}
export default Navbar;