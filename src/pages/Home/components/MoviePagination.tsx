import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../../components/ui/pagination';
import { useState } from 'react';

const DEFAULT_DISPLAY_PAGINATION_ITEMS = [1, 2, 3];
const DEFAULT_ITEMS_SIZE = 3;
const MoviePagination = ({
  pageNumber,
  totalPages,
  onPageNumberChange,
}: {
  pageNumber: number;
  totalPages: number;
  onPageNumberChange: (value: number) => void;
}) => {
  const [displayPaginationItems, setDisplayPaginationItems] = useState(() => {
    if (totalPages >= DEFAULT_ITEMS_SIZE) {
      return DEFAULT_DISPLAY_PAGINATION_ITEMS;
    }
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  });

  const lastDisplayPaginationItemIndex = displayPaginationItems.length - 1;

  const handleNextClick = () => {
    if (pageNumber === totalPages) {
      return;
    }
    const nextPageNumber = pageNumber + 1;
    onPageNumberChange(nextPageNumber);
    if (totalPages >= DEFAULT_ITEMS_SIZE + nextPageNumber - 2) {
      setDisplayPaginationItems(
        nextPageNumber + 2 > totalPages
          ? [nextPageNumber, nextPageNumber + 1]
          : [nextPageNumber, nextPageNumber + 1, nextPageNumber + 2],
      );
    }
  };

  const handlePreviousClick = () => {
    if (pageNumber === 1) {
      return;
    }
    const previousPageNumber = pageNumber - 1;
    onPageNumberChange(previousPageNumber);

    if (displayPaginationItems[0] > previousPageNumber) {
      setDisplayPaginationItems([
        previousPageNumber,
        previousPageNumber + 1,
        previousPageNumber + 2,
      ]);
    }
  };

  const handlePageNumberClick = (value: number) => {
    onPageNumberChange(value);
    if (value === displayPaginationItems[lastDisplayPaginationItemIndex]) {
      if (totalPages >= DEFAULT_ITEMS_SIZE + value - 2) {
        setDisplayPaginationItems(
          value + 2 > totalPages
            ? [value, value + 1]
            : [value, value + 1, value + 2],
        );
      }
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className="cursor-pointer"
          onClick={handlePreviousClick}
        >
          <PaginationPrevious />
        </PaginationItem>
        {displayPaginationItems[0] !== 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {displayPaginationItems.map((pageIndex) => (
          <PaginationItem
            key={pageIndex}
            className="cursor-pointer"
            onClick={() => handlePageNumberClick(pageIndex)}
          >
            <PaginationLink isActive={pageIndex === pageNumber}>
              {pageIndex}
            </PaginationLink>
          </PaginationItem>
        ))}
        {totalPages > DEFAULT_DISPLAY_PAGINATION_ITEMS.length &&
          displayPaginationItems[lastDisplayPaginationItemIndex] !==
            totalPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
        <PaginationItem className="cursor-pointer" onClick={handleNextClick}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MoviePagination;
