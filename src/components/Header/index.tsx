import './styles.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link className='header-link-img' to="/">
        <img src="holidays.png" className="header-img" />
      </Link>
      <div className='nav-bar flex-row jc-around'>
        <Link to="/lista">
          <button>Lista do chá de casa nova</button>
        </Link>
        <Link to="/dicas">
          <button>Dicas</button>
        </Link>
        <Link to="/contato">
          <button>Fale com a gente!</button>
        </Link>
      </div>
    </div>
  )
}

export default Header;