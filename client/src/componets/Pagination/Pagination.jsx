import React, { useState } from "react";
import styled from "@emotion/styled";

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
  color: #374151;
`;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 12;

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <PaginationWrapper>
      <PageButton onClick={goPrev} disabled={currentPage === 1}>
        Previous
      </PageButton>

      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>

      <PageButton onClick={goNext} disabled={currentPage === totalPages}>
        Next
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
