import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/html_editor">HTML Editor</Link>
            </div>
      )
}
export default Navbar;