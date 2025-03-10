import { Request, Response } from "express";
import { createSubject, deleteSubject, dropSubject, enrollStudent, getAllSubjects, getSubject, getSubjectsByStudent, getSubjectsByTeacher, renameSubject } from "./subject_service.js";

export async function createSubjectHandler(req: Request, res: Response) {
    try {
        res.status(201).json(await createSubject(req.body));
    } catch (error: any) {
        res.status(500);
    }
}

export async function getSubjectHandler(req: Request, res: Response) {
    try {
        const { subjectId } = req.params;
        const result = await getSubject(subjectId);
        if (!result) {
            res.status(404);
            return;
        }

        res.json(result);
    } catch (error: any) {
        res.status(500);
    }
}

export async function getAllSubjectsHandler(req: Request, res: Response) {
    try {
        res.json(await getAllSubjects());
    } catch (error: any) {
        res.status(500);
    }
}

export async function getSubjectsByTeacherHandler(req: Request, res: Response) {
    try {
        const { teacher } = req.params;
        res.json(await getSubjectsByTeacher(teacher));        
    } catch (error: any) {
        res.status(500);
    }
}

export async function getSubjectsByStudentHandler(req: Request, res: Response) {
    try {
        const { studentId } = req.params;
        res.json(await getSubjectsByStudent(studentId));
    } catch (error: any) {
        res.status(500);
    }
}

export async function renameSubjectHandler(req: Request, res: Response) {
    try {
        const { subjectId, newName } = req.params;
        const result = await renameSubject(subjectId, newName)
        if (!result) {
            res.status(404);
            return;
        }
        res.json(result);
    } catch (error: any) {
        res.status(500);
    }
}

export async function enrollStudentHandler(req: Request, res: Response) {
    try {
        const { subjectId, studentId } = req.params;
        const result = await enrollStudent(subjectId, studentId);
        if (!result) {
            res.status(404);
            return;
        }
        res.json(result);
    } catch (error: any) {
        res.status(500);
    }
}

export async function dropSubjectHandler(req: Request, res: Response) {
    try {
        const { subjectId, studentId} = req.params;
        const result = await dropSubject(subjectId, studentId);
        if(!result) {
            res.status(404);
            return;
        }
        res.json(result);
    } catch (error: any) {
        res.status(500);
    }
}

export async function deleteSubjectHandler(req: Request, res: Response) {
    try {
        const { subjectId } = req.params;
        const result = await deleteSubject(subjectId);
        if(!result) {
            res.status(404);
            return;
        }
        res.json(result);
    } catch (error: any) {
        res.status(500);
    }
}
