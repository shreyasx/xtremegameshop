const express = require("express");
const router = express.Router();

const {
	getUserById,
	getUser,
	updateUser,
	userPurchaseList,
	deleteUser,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.get(
	"/order/user/:userId",
	isSignedIn,
	isAuthenticated,
	userPurchaseList
);
router.get("/delete/:userId", isSignedIn, isAuthenticated, deleteUser);

module.exports = router;
