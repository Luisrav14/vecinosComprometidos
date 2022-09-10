import axios from "axios";
import { useEffect, useState } from "react";

export const usePost = async (url, data) => {
  await axios
    .post(url, data)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      // console.log(error);
      return "error";
    });
};
