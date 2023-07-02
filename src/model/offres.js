const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const offreSchema = new mongoose.Schema(
    {
        minEmployees : {type : Number, default:null },
        maxEmployees : {type : Number, default:null },
        description : {type : String, default:null },
        contactType : [{type : String , default: "FULLTIME", enum:["FULLTIME","PARTTIME","INTERNSHIP"]}] ,
        
        employer : {type : Schema.Types.ObjectId,ref : "employers"},
        applications : [{type : Schema.Types.ObjectId,ref : "applications"}]

    },
    {timestamps:true}
);

const Offre = mongoose.model("offres",offreSchema);