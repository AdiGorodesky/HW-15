import axios from "axios";
import students from "../src/data/students";
import { storageService } from "./storageService";
import { utilService } from "./utilService";

async function getStudentAsync() {
  return Promise.resolve(students);
}

function createUser(user) {
  const { username, email, password, avatar = "" } = user;

  const totalUsers = storageService.getUsers();
  const isExist = totalUsers.some((user) => user.username === username);
  if (isExist) return null;

  const newUser = {
    id: `${utilService.generateId()}`,
    username,
    password,
    email,
    avatar: `https://robohash.org/${username}`,
    isAdmin: false,
    createdAt: new Date(),
  };

  storageService.saveUsers([...totalUsers, newUser]);
  return true;
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
    let avatarId = "Binx Bond";
    const URL = `https://api.multiavatar.com/${avatarId}`;
    const { data } = await axios.get(URL);

    return data;

    // fetch("https://api.multiavatar.com/" + JSON.stringify(avatarId))
    //   .then((res) => res.text())
    //   .then((svg) => console.log(svg));
    // const URL = ` https://robohash.org/robo@robohash.org`;
    // const { data } = await axios.get(URL);
    // console.log(data);
    // return data;
  } catch (error) {
    console.log(error);
  }
}
// fetchAvastar();

export const userService = {
  getStudentAsync,
  createUser,
  login,
  logout,
  fetchAvatar,
};
