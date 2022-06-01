import { Document } from "mongoose";

export interface Profile extends Document {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
}