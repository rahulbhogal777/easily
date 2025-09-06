import { body, validationResult } from "express-validator";

const validateSignUp = async (req, res, next) => {
    
    // Set rules for validation using body and array
    const rules = [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Invalid email address"),
        body("password").isLength({min: 6}).withMessage("Minimum length of the password is 6"),
    ]

    // Run those rules
    await Promise.all(rules.map((rule) => rule.run(req)));

    // check if there is any error
    var validationError = validationResult(req);
    console.log(validationError.array());

    if (!validationError.isEmpty()) {
        return res.render("user-signup", { errorMessage: validationError.array()});
    }

    next();
}

export default validateSignUp;