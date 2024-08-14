import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/router';
import infoSvg from '@/assets/info.svg';

interface Movie {
    id: number;
    title: string;
    runtime: number;
    posterUrl: string;
    plot: string;
    director: string;
    actors: string;
}

interface MoviesProps {
    data: Movie[];
}

const Movies = ({ data }: MoviesProps) => {
    const navigate = useNavigate();

    const handleViewDetailClick = (id: number) => {
        navigate(paths.movieDetail.replace(':id', id.toString()));
    };

    return (
        <Table className="my-6">
            <TableBody>
                {data.map((movie) => (
                    <TableRow key={movie.id}>
                        <TableCell className="font-medium w-[100px]">
                            <img
                                src={movie.posterUrl}
                                alt="Movie poster"
                                className="w-[100px] h-[150px] object-cover"
                            />
                        </TableCell>
                        <TableCell className="flex flex-col text-left">
                            <div className="text-lg font-bold">{movie.title}</div>
                            <div>9.3</div>
                        </TableCell>
                        <TableCell className="text-right w-[100px]">
                            <div onClick={() => handleViewDetailClick(movie.id)}>
                                <img
                                    src={infoSvg}
                                    alt="Info"
                                    className="w-[34px] h-[34px] cursor-pointer"
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Movies;
