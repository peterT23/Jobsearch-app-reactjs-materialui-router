import jobs from "./data.json";

const service = {
  fetchJobsInfo: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = jobs.slice(from, to);
      resolve({
        count: jobs.length,
        data: data,
      });
    });
  },
};

export default service;
