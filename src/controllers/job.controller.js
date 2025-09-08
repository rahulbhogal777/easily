import user from "../models/users.model.js";
import jobsModel from "../models/jobs.model.js";

class JobController {
  getLogin(req, res) {
    res.render("user-login");
  }
  getSignup(req, res) {
    res.render("user-signup", {errorMessage: null});
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
  getPostJob(req, res) {
    res.render("new-job");
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
      req.session.user = foundUser;
      // res.render("landing-page");
      res.redirect("/");
    } else {
      res.render("404");
    }
  }
  postaddApplicant(req, res) {
    const id = parseInt(req.params.id);
    const index = jobsModel.getIndexById(id);
    console.log(index);
    console.log(req.body);
    if (index !== -1) {
      const { name, email, contact } = req.body;
      const resume = 'files/' + req.file.filename;
      const newApplicant = {
        name,
        email,
        contact,
        resume
      };
      jobsModel.newApplicant(index, newApplicant);
      res.redirect("/job/" + id);
    } else {
      res.render("404");
    }
  }
}

export default JobController;
