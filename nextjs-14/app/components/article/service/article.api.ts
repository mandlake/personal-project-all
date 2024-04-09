import { instance } from "@/redux/common/configs/axios-config";

export const findAllArticlesAPI = async (page: number) => {
  try {
    const response = await instance.get("/articles/list", {
      params: { page, limit: 10 },
    });

    console.log("success");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
