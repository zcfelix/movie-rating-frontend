import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../../../components/ui/dialog.tsx';
import MovieImg from '../../../components/common/MovieImg.tsx';
import { useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../../../components/ui/alert.tsx';
import { AlertCircle } from 'lucide-react';

const MoviePoster = ({ url }: { url: string }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <MovieImg url={url} className="w-full h-[150px] cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        {imgError ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4"></AlertCircle>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load the image. Please try again later.
            </AlertDescription>
          </Alert>
        ) : (
          <img
            src={url}
            alt="Movie Poster"
            className="w-full h-auto"
            onError={() => setImgError(true)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MoviePoster;
