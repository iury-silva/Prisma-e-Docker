import { create, getUserById, showAllUsers, update} from "../controllers/user.controller";

const userRoutes = app => {
  app.post("/user/create", create);
  app.get("/user/getUsers", showAllUsers);
  app.put("/user/updateUser/:id", update);
  app.get("/user/:id", getUserById);
}

export default userRoutes