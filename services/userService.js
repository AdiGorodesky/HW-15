import students from "../src/data/students";

async function getStudentAsync() {
  return Promise.resolve(students);
}

export const userService = { getStudentAsync };
