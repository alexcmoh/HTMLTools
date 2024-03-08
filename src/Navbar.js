import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
      return (
            <div>
                  <Link to="/html_editor"><button class="navButton">HTML Editor</button></Link>
                  <Link to="/prefix_appender"><button class="navButton">Prefix Appender</button></Link>
                  <Link to="/about"><button class="navButton">About</button></Link>
                  <Link to="/"><button class="navButton">Home</button></Link>
            </div>
      );
}
export default Navbar;