import { instance } from "@/redux/common/configs/axios-config";

export const findAllUsersAPI = async (page: number) => {
  try {
    const response = await instance.get("/users/list", {
      params: { page, size: 5, limit: 5 },
    });

    console.log("success");
    return response.data;
  } catch (error) {
    console.log("fail");
    console.log(error);
    return error;
  }
};
