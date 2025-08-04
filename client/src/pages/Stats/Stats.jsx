import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSongStatRequest } from "../../redux/feature/statSlice.js";
import {
  StatsContainer,
  StatBox,
  StatTitle,
  StatItem,
  Loading,
  ErrorMsg
} from "./StatsStyled.js";

const Stats = () => {
  const dispatch = useDispatch();
  const { totalSongs, songsPerGenre, topGenres, isLoading, error } =
    useSelector((state) => state.stat);

  useEffect(() => {
    dispatch(fetchUserSongStatRequest());
  }, [dispatch]);

  if (isLoading) return <Loading>Loading stats...</Loading>;
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  return (
    <StatsContainer>
      <StatBox>
        <StatTitle>Total Songs Added</StatTitle>
        <StatItem>{totalSongs ?? 0}</StatItem>
      </StatBox>

      <StatBox>
        <StatTitle>Songs Per Genre</StatTitle>
        {songsPerGenre && songsPerGenre.length > 0 ? (
          songsPerGenre.map((genre, index) => (
            <StatItem key={index}>
              {genre._id || "Unknown Genre"}: {genre.count}
            </StatItem>
          ))
        ) : (
          <StatItem>No songs by genre</StatItem>
        )}
      </StatBox>

      <StatBox>
        <StatTitle>Top Genres</StatTitle>
        {topGenres && topGenres.length > 0 ? (
          topGenres.map((genre, index) => (
            <StatItem key={index}>
              {genre._id || "Unknown Genre"}: {genre.count}
            </StatItem>
          ))
        ) : (
          <StatItem>No top genres</StatItem>
        )}
      </StatBox>
    </StatsContainer>
  );
};

export default Stats;
