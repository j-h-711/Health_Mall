const { model } = require("mongoose");
const commentSchema = require("../schemas/comment-schema");

const Comment = model("Comment", commentSchema);

module.exports = Comment;
