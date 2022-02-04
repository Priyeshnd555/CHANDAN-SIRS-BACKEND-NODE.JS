const mongoose = require("mongoose");

const { Schema } = mongoose;

const metaSchema = new Schema({
    votes:Number,
    favs:Number,
})

const commentsSchema = new Schema(
    {
    body: String,
    date: {
        type: Date,
        default: Date.now(),
    },
    },
);

const blogSchema = new Schema({
  title: String, // String is shorthand for {type:String}
  author: String,
  body: String,
  comments: [commentsSchema],
/*   comments: [
                        {
                        body: String,
                        date: {
                            type: Date,
                            default: Date.now(),
                        },
                        },
  ], */

  
  date: {
                        type: Date,
                        default: Date.now(),
  },
  hidden: Boolean,

  meta:metaSchema


/*   meta: {
                        votes: Number,
                        favs: Number,
  }, */



});

module.exports = mongoose.model('blogs',blogSchema)
// mongoos automatically convert it into plural if collection name is singular
/// blog->blogs
