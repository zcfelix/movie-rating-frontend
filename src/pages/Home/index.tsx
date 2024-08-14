import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchMovies } from "../../api";
import Movies from "./components/Movies";

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies().then((data) => {
            setMovies(data.contents);
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
            <SearchBar value={searchValue} onValueChange={handleSearchValueChange} onSearchClick={handleSearchClick}/>
            <Movies data={movies} />
        </div>
    );
}