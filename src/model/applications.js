const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const applicationSchema = new mongoose.Schema(
    {
        
        offres : {type : Schema.Types.ObjectId,ref : "offres"},
        candidat : {type : Schema.Types.ObjectId,ref : "candidates"}

    },
    {timestamps:true}
);

const Applications = mongoose.model("applications",applicationSchema);