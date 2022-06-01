import * as mongoose from "mongoose";

export const ProfileSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  mobile: String,
});

