import {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import {fetchMovies} from "../../api";

export default function Home() {
    // create state for search value
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);
    console.log(movies);

    useEffect(() => {
        fetchMovies().then((data) => {
            setMovies(data);
        });
    }, []);

    const handleSearchClick = () => {
        console.log("search value: ", searchValue);
    };

    const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <h1 className='text-3xl font-bold underline'>Home</h1>
            <p>Welcome to the home page!</p>
            <SearchBar value={searchValue} onValueChange={handleSearchValueChange} onSearchClick={handleSearchClick}/>
        </div>
    );
}