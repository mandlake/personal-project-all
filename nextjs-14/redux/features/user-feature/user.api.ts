import { instance } from "@/redux/common/configs/axios-config";

export const getAllUsersAPI = async (page: number) => {
  try {
    const response = await instance.get("/all-users", {
      params: { page, limit: 5 },
    });

    console.log("success");
    return response.data;
  } catch (error) {
    console.log("fail");
    console.log(error);
    return error;
  }
};
