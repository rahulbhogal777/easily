import express from "express";
import ejsLayout from "express-ejs-layouts";
import path from "path";
import JobController from "./src/controllers/job.controller.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { user } from "./src/middleware/user.middleware.js";
import validateSignUp from "./src/middleware/validation.middleware.js";
import { uploadFile } from "./src/middleware/fileUpload.middleware.js";


const app = express();

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());

app.use(ejsLayout);
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.set(
  "layout",
  path.join(path.resolve(), "src", "views", "layouts", "layout.ejs")
);

app.use(user);

const jobController = new JobController();

app.get("/", jobController.getLandingPage);
app.get("/login", jobController.getLogin);
app.get("/signup", jobController.getSignup);
app.get("/applicants", jobController.getAllApplicants);
app.get("/jobs", jobController.getListJobs);
app.get("/job/:id", jobController.getJobDetail);
app.get("/postjob", jobController.getPostJob);

app.post("/signup", validateSignUp, jobController.postSignup);
app.post("/login", jobController.postLogin);
app.post("/apply/:id", uploadFile.single("resume"), jobController.postaddApplicant);

app.listen(3400, () => {
  console.log("Server is running on port 3400");
});
