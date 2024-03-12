const USERS_KEY = "users";
const LOGGED_IN_USER = "loggedInUser";

export const storageService = {
  getUsers() {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },
  saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },
  removeUser(userId) {
    const users = this.getUsers();
    console.log(users);
    console.log(userId);

    const usersAfterRemove = users.filter((user) => user.id !== userId);
    console.log(usersAfterRemove);

    this.saveUsers(usersAfterRemove);
  },
  getLoggedInUser() {
    const loggedInUser = sessionStorage.getItem(LOGGED_IN_USER);
    return loggedInUser ? JSON.parse(loggedInUser) : null;
  },
  saveLoggedInUser(user) {
    sessionStorage.setItem(LOGGED_IN_USER, JSON.stringify(user));
  },
  clearAll() {
    sessionStorage.removeItem(LOGGED_IN_USER);
  },
};
