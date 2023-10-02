import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  newsMainTitle: {
    type: String,
  },
  newsTitle: {
    type: String,
  },
  newsSummaryDescription: {
    type: String,
  },
  newsDescription: {
    type: String,
  },
  newsImage: {
    type: Array,
  },
  publisher: {
    type: String,
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
  likes: {
    type: Number,
    default: 0,
  },
  
  dislikes: {
    type: Number,
    default: 0,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
NewsSchema.pre(/^find/, function (next) {
  this.populate({
    path: "comment",
    select: "comment postedAt",
  });
  next();
});

const News = mongoose.model("News", NewsSchema);
export default News;