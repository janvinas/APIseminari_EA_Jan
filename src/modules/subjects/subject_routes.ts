import express from "express"
import { createSubjectHandler, deleteSubjectHandler, dropSubjectHandler, enrollStudentHandler, getAllSubjectsHandler, getSubjectHandler, getSubjectsByStudentHandler, getSubjectsByTeacherHandler, renameSubjectHandler } from "./subject_controller.js";

const router = express.Router();

/**
 * @openapi
 * /api/subject:
 *   post:
 *     summary: Crea una nova assignatura
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *     responses:
 *       201:
 *         description: Assignatura creada satisfactoriament
 *       500:
 *         description: Error intern
 */
router.post('/subject', createSubjectHandler);

/**
 * @openapi
 * /api/subject/{subjectId}:
 *   get:
 *     summary: Obté informació d'una assignatura
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: subjectId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error intern
 */
router.get('/subject/:subjectId', getSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obté informació de totes les assignatures
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error intern
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/student/{studentId}:
 *   get:
 *     summary: Obté les assignatures d'un estudiant
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: studentId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error intern
 */
router.get('/subjects/student/:studentId', getSubjectsByStudentHandler);

/**
 * @openapi
 * /api/subjects/teacher/{teacher}:
 *   get:
 *     summary: Obté les assignatures d'un professor
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: teacher
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Error intern
 */
router.get('/subjects/teacher/:teacher', getSubjectsByTeacherHandler);


/**
 * @openapi
 * /api/subject/rename/{subjectId}/{newName}:
 *   patch:
 *     summary: Canvia el nom d'una assignatura
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: subjectId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: newName
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Error intern
 */
router.patch('/subject/rename/:subjectId/:newName', renameSubjectHandler);

/**
 * @openapi
 * /api/subject/enroll/{subjectId}/{studentId}:
 *   patch:
 *     summary: Matricula't a una assignatura
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: subjectId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: studentId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Error intern
 */
router.patch('/subject/enroll/:subjectId/:studentId', enrollStudentHandler);

/**
 * @openapi
 * /api/subject/drop/{subjectId}/{studentId}:
 *   patch:
 *     summary: Desmatricula't d'una assignatura
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: subjectId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: studentId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Error intern
 */
router.patch('/subject/drop/:subjectId/:studentId', dropSubjectHandler);


/**
 * @openapi
 * /api/subject/{subjectId}:
 *   delete:
 *     summary: Esborra una assignatura
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: subjectId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Error intern
 */
router.delete('/subject/:subjectId', deleteSubjectHandler)

export default router