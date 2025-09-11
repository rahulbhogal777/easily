class JobModel {
  constructor(
    id,
    jobcategory,
    job_designation,
    job_location,
    company_name,
    company_founded,
    employees,
    salary,
    apply_by,
    skills_required,
    numberofopenings,
    experience,
    jobposted,
    applicants,
    logo
  ) {
    this.id = id;
    this.job_category = jobcategory;
    this.job_designation = job_designation;
    this.job_location = job_location;
    this.company_name = company_name;
    this.company_founded = company_founded;
    this.employees = employees;
    this.salary = salary;
    this.apply_by = apply_by;
    this.skills_required = skills_required;
    this.number_of_openings = numberofopenings;
    this.experience = experience;
    this.job_posted = jobposted;
    this.applicants = applicants;
    this.logo = logo;
  }

  static getDataById(id) {
    const data = jobs.find((post) => post.id === id);
    return data;
  }

  static getIndexById(id) {
    const index = jobs.findIndex((post) => post.id === id);
    return index;
  }

  static newApplicant(index, applicant) {
    const applicantDetail = {
      id: jobs[index].applicants.length + 1,
      name: applicant.name,
      email: applicant.email,
      contact: applicant.contact,
      resume: applicant.resume,
    };
    jobs[index].applicants.push(applicantDetail);
  }

  static applicantsData(index) {
    const applicantData = jobs[index].applicants;
    return applicantData;
  }

  static addNewJob(newJob) {
    const job = {
      id: jobs.length + 1,
      job_category: newJob.job_category,
      job_designation: newJob.job_designation,
      job_location: newJob.job_location,
      company_name: newJob.company_name,
      company_founded: newJob.company_founded,
      employees: newJob.employees,
      salary: newJob.salary,
      apply_by: newJob.apply_by,
      skills_required: newJob.skills_required,
      number_of_openings: newJob.number_of_openings,
      experience: newJob.experience,
      job_posted: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      applicants: [],
      logo: newJob.logo,
    };
    jobs.push(job);
  }

  static updateJob(job) {
    const index = this.getIndexById(job.id);
    const update = {
      id: job.id,
      job_category: job.job_category,
      job_designation: job.job_designation,
      job_location: job.job_location,
      company_name: job.company_name,
      company_founded: job.company_founded,
      employees: job.employees,
      salary: job.salary,
      apply_by: job.apply_by,
      skills_required: job.skills_required,
      number_of_openings: job.number_of_openings,
      experience: job.experience,
      job_posted: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      applicants: [],
      logo: job.logo,
    };
    jobs[index] = update;
  }
  static deleteJob(id) {
    const index = this.getIndexById(id);
    jobs.splice(index, 1);
  }

  static getJobs() {
    return jobs;
  }
}

var jobs = [
  new JobModel(
    1,
    "Tech",
    "SDE",
    "Gurgaon HR IND Remote",
    "Coding Ninjas",
    2016,
    "4+k",
    "6-10 LPA",
    "2025-09-20",
    ["React", "NodeJS", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "1-2 yrs",
    "11 Sep 2025",
    [],
    "https://s3.amazonaws.com/beamstart/2019/Nov/25/d6921b8f8bf3ec4f1005c1f9afa08798.jpeg"
  ),
  new JobModel(
    2,
    "Tech",
    "SDE",
    "Pune IND On-Site",
    "GoDigit",
    2012,
    2190,
    "6-10 LPA",
    "2025-09-20",
    ["Angular", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "2-3 yrs",
    "10 Sep 2025",
    [],
    "https://play-lh.googleusercontent.com/E48vP0Wlf9lEPfOGwDR8CTupJw7fHuwVjlZiOke_GZITViUdUHXxn1A1jZI-qjcjMw"
  ),
  new JobModel(
    3,
    "Tech",
    "SDE",
    "Banglore IND",
    "Juspay",
    2011,
    350,
    "20-26 LPA",
    "2025-09-20",
    ["React", "NodeJS", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "3-5 yrs",
    "9 Sep 2025",
    [],
    "https://assets.indiaonline.in/businessimg/products/450/3123665_bb857.png"
  ),
];

export default JobModel;
