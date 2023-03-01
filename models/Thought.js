const { Schema,  model } = require("mongoose");
const moment = require("moment");
const ReactionSchema = require("./Reaction");
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (currentDate) => moment(currentDate).toDate(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

thoughtSchema
    .virtual("reactionCount")
    .get(function () {
        return this.reactions.length;
    });

const Thought = model("Thought", thoughtSchema);

model.exports = Thought;