const userNameField = document.querySelector("#userName");
const userEmailField = document.querySelector("#userEmail");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let id = 0;
export let users = [];

// 1. Factory Function
export function createUser(event) {
  event.preventDefault();

  const name = userNameField.value.trim();
  const email = userEmailField.value.trim();

  if (name !== "" && emailRegex.test(email)) {
    id++;
    let user = new User(id, name, email);

    users.push(user);
    console.log("user created", user);

    userNameField.value = "";
    userEmailField.value = "";
  } else {
    alert("Please enter a valid name and email.");
  }
}

// 2. Constructor Function
function User(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.isActive = true;
  this.createdAt = new Date();

  this.getUserInfo = () => userActions.getUserInfo(this.name, this.email);
  this.updateEmail = (newEmail) => {
    const updated = userActions.updateEmail(newEmail);
    if (updated) this.email = updated;
  };
  this.deactivate = () => {
    this.isActive = userActions.deactivate();
  };
  this.getAccountAge = () => {
    alert(userActions.getAccountAge(this.createdAt));
  };
}

// 3. Object methods practice
const userActions = {
  getUserInfo(name, email) {
    return `Name: ${name} Email: ${email}`;
  },

  deactivate() {
    return false;
  },

  getAccountAge(createdAt) {
    let diff = new Date() - createdAt; // in ms
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return `Account is ${years} ${years === 1 ? "year" : "years"} old`;
  },

  updateEmail(newEmail) {
    if (emailRegex.test(newEmail)) {
      alert("Email updated!");
      return newEmail;
    } else {
      alert("Invalid email format");
      return null;
    }
  }
};