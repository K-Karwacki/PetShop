import { Link } from "react-router-dom";

export function Header(){
    return(
        <header>
            <div>
                <span id="logo">PetShop</span>
            </div>
            <nav className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/list">List</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}