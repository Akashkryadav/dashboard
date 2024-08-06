import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
    assetName:"string",
    titleName:"string",
    tvModel2024:"string",
    tvModel2023:"string",
    tvModel2017:"string",
    tab:"string",
    mobile:"string",
    web:"string",
    fhub:"string",
});
const Report =  mongoose.models("Report",ReportSchema);
export default Report;