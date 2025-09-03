import user from "../models/users.model.js";
import jobsModel from "../models/jobs.model.js";

class JobController {
  getLogin(req, res) {
    res.render("user-login");
  }
  getSignup(req, res) {
    res.render("user-signup");
  }
  getAllApplicants(req, res) {
    res.render("all-applicants");
  }
  getLandingPage(req, res) {
    res.render("landing-page");
  }
  getNewJob(req, res) {
    res.render("new-job");
  }
  getListJobs(req, res) {
    const jobs = jobsModel.getJobs();
    res.render("list-all-jobs", { jobs });
  }
  getJobDetail(req, res) {
    const id = parseInt(req.params.id);
    const data = jobsModel.getDataById(id);
    console.log(data);
    if (data) {
      res.render("job-details", { data, user: null });
    } else {
      res.render("404");
    }
  }

  postSignup(req, res) {
    const { name, email, password } = req.body;
    user.addUser(name, email, password);
    res.render("user-login");
  }
  postLogin(req, res) {
    const { email, password } = req.body;
    const foundUser = user.findUser(email, password);
    console.log(foundUser);
    if (foundUser) {
      res.render("landing-page");
    } else {
      res.render("404");
    }
  }
}

export default JobController;
