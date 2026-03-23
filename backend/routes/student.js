import express from "express"
import {studentModel} from "../models/Student.js"

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
    try {
        const students = await studentModel.find({});
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

studentRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const student = await studentModel.findOne({id: id});
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

studentRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const student = await studentModel.findOneAndDelete({id: id});
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }  
})

studentRouter.put("/:id", async (req, res) => {
    const id = req.params.id;
    const {contactNumber} = req.body;
    try {  
        const student = await studentModel.findOneAndUpdate({id: id}, {contactNumber: contactNumber}, {new: true});
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }  
})

studentRouter.post("/", async (req, res) => {
    const body = req.body;    
    try {
        const { firstName, lastName, id, password, contactNumber } = body;
        if (!firstName || !lastName || !id || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const student = await studentModel.create({firstName, lastName, id, password, contactNumber });     
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})



export default studentRouter;