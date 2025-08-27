import express from 'express';
import ejsLayout from 'express-ejs-layouts';
import path from 'path';
import JobController from './src/controllers/job.controller.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(ejsLayout);
app.set('views', path.join(path.resolve(), 'src','views'));
app.set("layout", path.join(path.resolve() , 'src', "views", "layouts", "layout.ejs"));

const jobController = new JobController();


app.get("/", jobController.getLandingPage);
app.get('/login', jobController.getLogin);
app.get('/signup', jobController.getSignup);
app.get('/applicants', jobController.getAllApplicants);
app.get('/new-job', jobController.getNewJob);
app.get('/jobs', jobController.getListJobs);

app.post('/signup', jobController.postSignup);
app.post('/login', jobController.postLogin);


app.listen(3400, () => {
    console.log('Server is running on port 3400');
});