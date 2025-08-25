
class JobController {

    getLogin(req, res) {
        res.render('user-login');
    }
    getSignup(req, res) {
        res.render('user-signup');
    }
}

export default JobController;