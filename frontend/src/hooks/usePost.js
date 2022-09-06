import axios from "axios";
import { useState } from "react";

export const usePost = async (data, url) => {
  await axios
    .post(url, data)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return "error";
    });
};
