import mongoose from "mongoose";


const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    password: {
        type: String, 
        required: true,
    },
    contactNumber: {
        type: String,
    }
}, {
    timestamps: true
});

export const studentModel = new mongoose.model("Student", StudentSchema);