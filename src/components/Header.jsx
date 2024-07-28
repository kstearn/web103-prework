import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <h1>Creatorverse</h1>
            <nav>
                <Link to="/">
                    <button>View All Creators</button>
                </Link>
                <Link to="/add">
                    <button>Add New Creator</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;