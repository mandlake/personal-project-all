import { instance } from "@/redux/common/configs/axios-config";

export const findAllBoardsAPI = async (page: number) => {
  try {
    const response = await instance.get("/all-boards", {
      params: { page, limit: 10 },
    });

    console.log("success");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
