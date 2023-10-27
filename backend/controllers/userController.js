import services from "../services/index.js";

const userController = (req, res) => {
  services.userSerices.userService("user Route working", res);
};

export default { userController };
