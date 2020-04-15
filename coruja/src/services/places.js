import { http } from "./config";

export default {
  listItems: () => {
    return http.get("paises");
  },
  savePlace: (place) => {
    return http.post("paises", place);
  },
};
