class JobModel {
  constructor(
    id,
    jobcategory,
    job_designation,
    job_location,
    company_name,
    salary,
    apply_by,
    skills_required,
    numberofopenings,
    jobposted,
    applicants
  ) {
    this.id = id;
    this.job_category = jobcategory;
    this.job_designation = job_designation;
    this.job_location = job_location;
    this.company_name = company_name;
    this.salary = salary;
    this.apply_by = apply_by;
    this.skills_required = skills_required;
    this.number_of_openings = numberofopenings;
    this.job_posted = jobposted;
    this.applicants = applicants;
  }

  static getDataById(id) {
    const data = jobs.find((post) => post.id === id);
    return data;
  }

  static getJobs() {
    return jobs;
  }
}

var jobs = [
  new JobModel(
    1,
    "IT",
    "SDE",
    "Gurgaon HR IND Remote",
    "CodingNinjas",
    "6-10 LPA",
    "Apply By 30 Aug 2023",
    ["React", "NodeJS", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "23 july 2023",
    []
  ),
  new JobModel(
    2,
    "IT",
    "SDE",
    "Pune IND On-Site",
    "GoDigit",
    "6-10 LPA",
    "Apply By 30 Aug 2023",
    ["Angular", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "23 july 2023",
    []
  ),
  new JobModel(
    3,
    "IT",
    "SDE",
    "Banglore IND",
    "Juspay",
    "20-26 LPA",
    "Apply By 30 Aug 2023",
    ["React", "NodeJS", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "23 july 2023",
    []
  ),
];

export default JobModel;
