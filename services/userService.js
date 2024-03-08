import students from "../src/data/students";
import { storageService } from "./storageService";
import { utilService } from "./utilService";

async function getStudentAsync() {
  return Promise.resolve(students);
}

function createUser(username, email, password, avatar = "") {
  const newUser = {
    id: utilService.generateId(),
    username,
    password,
    email,
    avatar,
    isAdmin: false,
    createdAt: new Date(),
  };
  const totalUsers = storageService.getUsers();
  storageService.saveUsers([...totalUsers, newUser]);
}

function login(username, password) {
  const users = storageService.getUsers();
  const foundedUser = users.find(
    (user) => user.password === password && user.username === username
  );

  if (!foundedUser) return null;
  storageService.saveLoggedInUser(foundedUser);
  return foundedUser;
}

function logout() {
  storageService.clearAll();
}

async function fetchAvatar(username = "shoshi") {
  try {
    const URL = `https://yesno.wtf/api`;
    //? GET with fetch
    // const response = await fetch(URL)
    // const data = await response.json()

    //? POST with fetch:
    // const fetchDataWithFetch = await fetch(URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: { data: "I am a body" },
    // });

    // const data1 = await fetchDataWithFetch.json();

    //? GET with axios
    // const { data } = await axios.get(URL)

    //? POST with axios:
    //   const fetchDataWithAxios = await axios.put(
    //     `${URL}?username=shoshi&isAdmin=true`,
    //     { data: "I Am a body" }
    //   );
    //   const { data } = fetchDataWithAxios;
    //   return data;
    // } catch (error) {
    //   console.log(error);
    // }
  } catch (error) {
    console.log(error);
  }
}

export const userService = {
  getStudentAsync,
  createUser,
  login,
  logout,
  fetchAvatar,
};
