const Db = require("mongodb/lib/db");
const {ObjectId} = require('mongodb');

let stories;
exports.initCollection = (db) => {
    stories = db.collection('stories')
}
exports.find = () => stories.find().toArray();

exports.findById = id => stories.findOne({_id:ObjectId(id)});

exports.save = (story)=> (stories.insertOne(story));
    // story.id = uuidv4();
    // story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    // stories.push(story);


exports.updateById = (id, newStory)=> stories.findOneAndUpdate({_id:ObjectId(id)},
{$set:{title:newStory.title, content: newStory.content}});

exports.deleteById = function (id) {
    let index = stories.findIndex(story => story.id === id);
    if (index !== -1) {
        stories.splice(index, 1);
        return true;
    } else {
        return false;
    }
}