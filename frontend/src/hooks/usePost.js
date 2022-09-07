import axios from "axios";

export const usePost = async (url, data) => {
  await axios
    .post(url, data)
    .then(({ data }) => {
      console.log(data);
      return true;
    })
    .catch((error) => {
      // console.log(error);
      return "error";
    });
};
