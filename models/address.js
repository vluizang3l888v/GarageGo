const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
street:{
    type: String, required: true
},

city:{
    type: String, required: true
},
state:{
    type: String, required: true
},
zip:{
    type: Number, required: true
},
active:{
    type: Boolean, require: true
}
},{
    _id: false
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;