import songsReducer, {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure
} from "./songsSLice";

describe("songsSlice reducer tests", () => {
  const initialState = {
    songs: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPage: null
  };

  it("correctly handle fetchSongsRequest", () => {
    const state = songsReducer(initialState, fetchSongsRequest());
    expect(state.isLoading).toBe(true);
    expect(state.error).toBeNull();
  });

  it("correctly handle fetchSongsSuccess", () => {
    const payload = {
      songs: [
        {
          _id: "1",
          title: "title",
          artist: "artist",
          album: "album",
          year: 2025,
          genre: "genre"
        }
      ],
      page: 2,
      totalPage: 5
    };
    const nextState = songsReducer(initialState, fetchSongsSuccess(payload));
    expect(nextState.isLoading).toBe(false);
    expect(nextState.songs).toEqual(payload.songs);
    expect(nextState.page).toBe(2);
    expect(nextState.totalPage).toBe(5);
    expect(nextState.error).toBeNull();
  });

  it("correctly handle fetchSongsFailure", () => {
    const nextState = songsReducer(
      initialState,
      fetchSongsFailure("all filed required")
    );
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe("all filed required");
  });
});
