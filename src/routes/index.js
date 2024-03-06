const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authentication.middleware');

const indexControllers = require('../controllers/index.controller');
const redirectIfLoggedIn = require('../middleware/redirect-if-session.middleware');

// GET PATIENT CERTIFICATE CONFIRMATION
router.get('/Covid19VaccineCertificates/:id', indexControllers.getPatientCertificate);

// GET PATIENT CERTIFICATE PDF FILE
router.get('/Covid19VaccineCertificates/pdf/:id', authMiddleware, indexControllers.getPatientCertificatePdf);

// USER REGISTRATION GET
router.get('/register', redirectIfLoggedIn, indexControllers.getRegisterUser);

// USER REGISTRATION POST
router.post('/register', redirectIfLoggedIn, indexControllers.postRegisterUser);

// USER LOGIN GET
router.get('/login', redirectIfLoggedIn, indexControllers.getLoginUser);

// USER LOGIN POST
router.post('/login', redirectIfLoggedIn, indexControllers.postLoginUser);

// USER LOGOUT GET
router.get('/logout', authMiddleware, indexControllers.getLogoutUser);

module.exports = router;
