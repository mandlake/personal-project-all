import { instance } from "@/redux/common/configs/axios-config";

export const getAllArticlesAPI = async (page: number) => {
  try {
    const response = await instance.get("/all-articles", {
      params: { page, limit: 10 },
    });

    console.log("success");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
