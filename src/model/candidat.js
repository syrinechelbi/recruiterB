const mongoose = require("mongoose");

const candidatSchema = new mongoose.Schema(
    {
        firstName : {type : String, default:null },
        laststName : {type : String, default:null },
        phone : {type : String, default:null },
        email : {type : String, default:null },
        password : {type : String, default:null },
        gender : {type : String, default:null }


    },
    {timestamps:true}
);

const Candidate = mongoose.model("candidates",candidatSchema);
