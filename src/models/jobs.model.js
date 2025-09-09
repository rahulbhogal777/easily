class JobModel {
  constructor(
    id,
    jobcategory,
    job_designation,
    job_location,
    company_name,
    company_founded,
    salary,
    apply_by,
    skills_required,
    numberofopenings,
    experience,
    jobposted,
    applicants,
    logo,
  ) {
    this.id = id;
    this.job_category = jobcategory;
    this.job_designation = job_designation;
    this.job_location = job_location;
    this.company_name = company_name;
    this.company_founded = company_founded;
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
    "Coding Ninjas",
    2016,
    "6-10 LPA",
    "Apply By 30 Aug 2023",
    ["React", "NodeJS", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "1-2 yrs",
    "23 july 2023",
    [],
    "https://s3.amazonaws.com/beamstart/2019/Nov/25/d6921b8f8bf3ec4f1005c1f9afa08798.jpeg"
  ),
  new JobModel(
    2,
    "IT",
    "SDE",
    "Pune IND On-Site",
    "GoDigit",
    2012,
    "6-10 LPA",
    "Apply By 30 Aug 2023",
    ["Angular", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "2-3 yrs",
    "23 july 2023",
    [],
    "https://play-lh.googleusercontent.com/E48vP0Wlf9lEPfOGwDR8CTupJw7fHuwVjlZiOke_GZITViUdUHXxn1A1jZI-qjcjMw"
  ),
  new JobModel(
    3,
    "IT",
    "SDE",
    "Banglore IND",
    "Juspay",
    2011,
    "20-26 LPA",
    "Apply By 30 Aug 2023",
    ["React", "NodeJS", "JS", "SQL", "MongoDB", "Express", "AWS"],
    10,
    "3-5 yrs",
    "23 july 2023",
    [],
    "https://assets.indiaonline.in/businessimg/products/450/3123665_bb857.png"
  ),
];

export default JobModel;
