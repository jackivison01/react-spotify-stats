import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="bg-gray-800 text-white h-full p-4 flex flex-col items-start justify-center">
            <Link to="/" style={{ margin: "0 20px" }}>Home Page</Link>
            <Link to="/currently-playing" style={{ margin: "0 20px" }}>Currently Playing</Link>
        </nav>
    );
}
