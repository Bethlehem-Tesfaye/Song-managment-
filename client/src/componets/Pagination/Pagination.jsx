import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest } from "../../redux/feature/songsSLice.js";
import { PaginationWrapper, PageButton, PageInfo } from "./paginationStyled.js";

const Pagination = () => {
  const { songs, isLoading, page, totalPage } = useSelector(
    (state) => state.songs
  );

  const dispatch = useDispatch();
  const totalPages = totalPage;

  const goPrev = () => {
    if (page > 1 && !isLoading) {
      dispatch(fetchSongsRequest(page - 1));
    }
  };

  const goNext = () => {
    if (page < totalPages && !isLoading) {
      dispatch(fetchSongsRequest(page + 1));
    }
  };

  return (
    <PaginationWrapper>
      {page !== 1 ? (
        <PageButton onClick={goPrev} disabled={page === 1}>
          Previous
        </PageButton>
      ) : (
        ""
      )}

      <PageInfo>
        Page {page} of {totalPages}
      </PageInfo>

      {page !== totalPages ? (
        <PageButton onClick={goNext} disabled={page === totalPages}>
          Next
        </PageButton>
      ) : (
        ""
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
