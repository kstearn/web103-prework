import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <h1>Creatorverse</h1>
            <nav>
                <Link to="/">
                    <button>View All</button>
                </Link>
                <Link to="/add">
                    <button>Create New</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;