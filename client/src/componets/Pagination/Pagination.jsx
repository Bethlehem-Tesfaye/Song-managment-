import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest } from "../../redux/feature/songsSLice.js";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 30px auto 0 auto;
`;

const PageButton = styled.button`
  border: 1px solid #d1d5db;
  background-color: white;
  color: #111827;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
`;

const PageInfo = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.value};
`;

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
