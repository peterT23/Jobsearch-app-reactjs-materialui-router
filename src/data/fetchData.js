import jobs from "./data.json";

// const service = {
//   fetchJobsInfo: async ({ q }) => {
//     const pageSize = 5;
//     if (q) {
//       let filterJob = jobs.filter(
//         (job) =>
//           job.title.includes(q) ||
//           job.description.includes(q) ||
//           job.city.includes(q) ||
//           job.skills.some((skill) => skill.includes(q))
//       );

// return new Promise((resolve, reject) => {

//   if(q){

//   }
//   const data = jobs.slice(from, to);
//   resolve({
//     count: jobs.length,
//     data: data,
//   });
// });

const service = {
  fetchJobsInfo: async (q) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });

    await promise;
    if (q) {
      let filtedJob = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(q.toLowerCase()) ||
          job.description.toLowerCase().includes(q.toLowerCase()) ||
          job.city.toLowerCase().includes(q.toLowerCase()) ||
          job.skills.some((skill) =>
            skill.toLowerCase().includes(q.toLowerCase())
          )
      );

      return { jobs: filtedJob };
    } else {
      return { jobs: jobs };
    }
  },
  fetchJobDetailInfo: async (id) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
    await promise;
    let job = jobs.find((job) => job.id === id);
    return job;
  },
};
export default service;
