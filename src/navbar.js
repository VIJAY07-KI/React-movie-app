import { Link, Route, Routes } from "react-router-dom";
import Movies from './App';               // Import your Movies component
import Users from './users';              // Import your Users component
import FunctionalComponent from './functionHook';  // Import your FunctionalComponent

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/users">Users</Link> &nbsp;
                <Link to="/playCountGame">PlayCountGame</Link> &nbsp;
                <Link to="/movies">Movies</Link> &nbsp;
            </nav>
            
            {/* Use <Routes> to wrap all <Route> components */}
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/users" element={<Users />} />     {/* Ensure Users component is here */}
                <Route path="/playCountGame" element={<FunctionalComponent />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </div>
    );
}

export default NavBar;
