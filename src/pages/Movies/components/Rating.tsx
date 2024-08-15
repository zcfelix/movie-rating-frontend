import { Star } from 'lucide-react';

const Rating = ({ rating }: { rating: string }) => {
  return (
    <>
      <div className="flex justify-center items-center space-x-1">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="text-sm text-gray-500">{rating}</span>
      </div>
    </>
  );
};

export default Rating;
