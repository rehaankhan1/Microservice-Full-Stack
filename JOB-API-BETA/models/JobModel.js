import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values[JOB_STATUS],
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values[JOB_TYPE],
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
    jobDate: {
      type: Date,
      default: null,
    },
    jobNote: {
      type: String,
      default: "",
    },
    jobLink: {
      type: String,
      default: "",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
