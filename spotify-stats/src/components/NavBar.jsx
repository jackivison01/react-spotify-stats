import { Link } from "react-router-dom";
import LogInButton from "./LogInButton";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 h-full p-4 flex flex-col">
            <div className="flex-grow">
                <Link to="/" style={{ margin: "0 20px" }}>Home Page</Link>
                <Link to="/currently-playing" style={{ margin: "0 20px" }}>Currently Playing</Link>
            </div>
            <div className="mt-auto">
                <LogInButton />
            </div>
        </nav>
    );
}
