import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Movie } from "@/types/movie";

const MovieDetailDialog = ({ children, movie }: { children: React.ReactNode, movie: Movie }) => {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex gap-4">
                        <img
                            src={movie.posterUrl}
                            alt="Movie Poster"
                            className="w-[80px] h-[120px] object-cover"
                        />
                        <div>
                            <div>{movie.title}</div>
                            <div className="m-1">9.3</div>
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        <span className="font-bold">Director: </span>
                        <span className="text-blue-500">{movie.director}</span>
                    </DialogDescription>
                    <DialogDescription>
                        <span className="font-bold">Actors: </span>
                        <span className="text-blue-500">{movie.actors}</span>
                    </DialogDescription>
                    <DialogDescription>{movie.plot}</DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default MovieDetailDialog;