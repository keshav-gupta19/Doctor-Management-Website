const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", authMiddleware, authController);

router.post("/apply-doctor", authMiddleware, applyDoctorController);

router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
router.get("/getAllDoctors", authMiddleware, getAllDoctorController);

router.post("/book-appointment", authMiddleware, bookAppointmentController);

router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
