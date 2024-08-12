import http from "../../config/axios";

class UsersService {
  login(username, password) {
    return http.post("/auth/login/", {
      username: username,
      password: password,
    });
  }

  register(username, email, password) {
    return http.post("/auth/registration/", {
      username: username,
      email: email,
      password: password,
    });
  }
}
