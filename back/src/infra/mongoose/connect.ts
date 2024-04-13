import mongoose from "mongoose";

export const connect = async (url: string) => {
    await mongoose.connect(url)
}
