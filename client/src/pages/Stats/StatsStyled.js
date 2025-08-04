import styled from "@emotion/styled";

export const StatsContainer = styled.div`
  padding: 2rem;
  background: #f4f6f8;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StatBox = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const StatTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const StatItem = styled.div`
  font-size: 0.95rem;
  color: #555;
  margin-left: 1rem;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const ErrorMsg = styled.div`
  color: red;
  text-align: center;
  padding: 1rem;
`;
