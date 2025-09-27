import { createUser} from "./create_user.js";

const createUserBTn = document.querySelector("#createUserBtn");

createUserBTn.addEventListener("click", (event) => {
    createUser(event);
});
