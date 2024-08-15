import { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../../components/ui/pagination';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const DEFAULT_SHOW_PAGES = 5;
const START_ELLIPSIS_THRESHOLD = 3;
const END_ELLIPSIS_THRESHOLD = 3;
const ELLIPSIS_PAGES_RANGE = 1;

const MoviePagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const generatePages = () => {
      const pageNumbers = [];
      if (totalPages <= DEFAULT_SHOW_PAGES) {
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        if (currentPage <= START_ELLIPSIS_THRESHOLD) {
          for (let i = 1; i <= DEFAULT_SHOW_PAGES - 2; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push(-1); // Ellipsis
          pageNumbers.push(totalPages);
        } else if (currentPage > totalPages - END_ELLIPSIS_THRESHOLD) {
          pageNumbers.push(1);
          pageNumbers.push(-1); // Ellipsis
          for (
            let i = totalPages - (DEFAULT_SHOW_PAGES - 2);
            i <= totalPages;
            i++
          ) {
            pageNumbers.push(i);
          }
        } else {
          pageNumbers.push(1);
          pageNumbers.push(-1); // Ellipsis
          for (
            let i = currentPage - ELLIPSIS_PAGES_RANGE;
            i <= currentPage + ELLIPSIS_PAGES_RANGE;
            i++
          ) {
            pageNumbers.push(i);
          }
          pageNumbers.push(-1); // Ellipsis
          pageNumbers.push(totalPages);
        }
      }
      setPages(pageNumbers);
    };
    generatePages();
  }, [totalPages, currentPage]);

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePreviousClick} size="default" />
        </PaginationItem>
        {pages.map((page, index) =>
          page === -1 ? (
            <PaginationItem key={index}>
              <PaginationEllipsis />{' '}
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => handlePageClick(page)}
                isActive={page === currentPage}
                size="icon"
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext onClick={handleNextClick} size="default" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MoviePagination;
