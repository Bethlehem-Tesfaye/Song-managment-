import songModel from "../models/songModel.js";
import mongoose from "mongoose";

export const getUserSongStats = async (req, res, next) => {
  const { userId } = req;
  try {
    const totalSongs = await songModel.countDocuments({ userId });

    const songsPerGenre = await songModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: "$genre",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const topGenres = await songModel.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: "$genre",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 3 }
    ]);

    res.status(200).json({
      data: {
        totalSongs,
        songsPerGenre,
        topGenres
      }
    });
  } catch (error) {
    next(error);
  }
};
