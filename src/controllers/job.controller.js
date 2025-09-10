import user from "../models/users.model.js";
import jobsModel from "../models/jobs.model.js";

class JobController {
  getLogin(req, res) {
    res.render("user-login");
  }
  getSignup(req, res) {
    res.render("user-signup", { errorMessage: null });
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
    console.log(jobs);
    res.render("list-all-jobs", { jobs });
  }
  getJobDetail(req, res) {
    const id = parseInt(req.params.id);
    const data = jobsModel.getDataById(id);
    if (data) {
      res.render("job-details", { data, user: req.session.user || null });
    } else {
      res.render("404");
    }
  }
  getPostJob(req, res) {
    res.render("new-job");
  }
  getAllApplicants(req, res) {
    const id = parseInt(req.params.id);
    const index = jobsModel.getIndexById(id);
    if (index !== -1) {
      const allApplicants = jobsModel.applicantsData(index);
      res.render("all-applicants", { allApplicants });
    } else {
      res.render("404");
    }
  }
  getLogOut(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie("user");
        res.redirect("/");
      }
    });
  }

  postSignup(req, res) {
    const { name, email, password } = req.body;
    user.addUser(name, email, password);
    res.render("user-login");
  }
  postLogin(req, res) {
    const { email, password } = req.body;
    const foundUser = user.findUser(email, password);
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
    if (index !== -1) {
      const { name, email, contact } = req.body;
      const resume = req.file.filename;
      const newApplicant = {
        name,
        email,
        contact,
        resume,
      };
      jobsModel.newApplicant(index, newApplicant);
      res.redirect("/job/" + id);
    } else {
      res.render("404");
    }
  }
  postAddNewJob(req, res) {
    const {
      job_category,
      job_designation,
      job_location,
      company_name,
      company_founded,
      employess,
      salary,
      number_of_openings,
      experience,
      skills_required,
      apply_by,
    } = req.body;
    const logo = '/upload/' + req.file.filename;
    const newJob = {
      job_category,
      job_designation,
      job_location,
      company_name,
      company_founded,
      employess,
      salary,
      number_of_openings,
      experience,
      skills_required,
      apply_by,
      logo,
    };
    jobsModel.addNewJob(newJob);
    res.redirect("/jobs");
  }
}

export default JobController;
