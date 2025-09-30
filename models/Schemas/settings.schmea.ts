// Society settings schema

import mongoose, { Schema, Document } from "mongoose";

export interface ISettings extends Document {
    joiningPrivacy : "public" | "private" | "inviteOnly"
}


export const settingsSchema = new Schema<ISettings>({
    joiningPrivacy : {
        type : String,
        enum : ["public", "private", "inviteOnly"],
        default : "public"
    }
}, { timestamps: true })

