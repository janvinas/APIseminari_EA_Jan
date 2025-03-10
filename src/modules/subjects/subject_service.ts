import mongoose from "mongoose";
import Subject, { ISubject } from "./subject_models.js";
import { IUser } from "../users/user_models.js";


// Crud
export async function createSubject(subject: Partial<ISubject>): Promise<ISubject>{
    const subjectModel = new Subject(subject);
    return subjectModel.save();
}

// cRud
export async function getSubject(subjectId: string): Promise<ISubject | null> {
    return Subject.findById(subjectId).populate<{students: IUser[]}>("students");
}

export async function getAllSubjects(): Promise<ISubject[]> {
    return Subject.find().populate<{students: IUser[]}>("students");
}

export async function getSubjectsByTeacher(teacher: string): Promise<ISubject[]> {
    return Subject.find({teacher: teacher});
}

export async function getSubjectsByStudent(studentId: string): Promise<ISubject[]> {
    return Subject.find({students: {$all: [studentId]}});
}

// crUd

export async function renameSubject(subjectId: string, newName: string): Promise<ISubject | null> {
    return Subject.findByIdAndUpdate(subjectId, {name: newName}, {new: true});
}
export async function enrollStudent(subjectId: string, studentId: string): Promise<ISubject[] | null> {
    return Subject.findByIdAndUpdate(subjectId, {$addToSet: {students: studentId}}, {new: true});
}
export async function dropSubject(subjectId: string, studentId: string): Promise<ISubject[] | null> {
    return Subject.findByIdAndUpdate(subjectId, {$pull: {students: studentId}}, {new: true});
}

// cruD
export async function deleteSubject(subjectId: string): Promise<ISubject | null> {
    return Subject.findByIdAndDelete(subjectId);
}