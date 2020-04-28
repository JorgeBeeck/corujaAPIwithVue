import { http } from "./config";

const myToken = localStorage.getItem("token");
const AuthStr = "Token ".concat(myToken);

export default {
  listEstados: () => {
    return http.get("estados/");
  },
  addEstado: (estado) => {
    return http.post("estados/", estado, {
      headers: { Authorization: AuthStr },
    });
  },
  updateEstado: (estado) => {
    return http.put("estados/", estado, {
      headers: { Authorization: AuthStr },
    });
  },
  deleteEstado: (estado) => {
    return http.delete("estados/", estado, {
      headers: { Authorization: AuthStr },
    });
  },
};
