import { getAllUsers } from "@/redux/features/user-feature/user.slice";
import { useSelector } from "react-redux";

export default function UserRows() {
  const allUsers: [] = useSelector(getAllUsers); // 사용자 정보 가져오기

  // 추가 정보 행 생성
  const additionalRows = allUsers?.map((user: IUser) => ({
    id: user.id,
    username: user.username,
    password: user.password,
    phoneNumber: user.phone_number,
    name: user.name,
    job: user.job,
  }));

  // 기본 행 및 추가 정보 행 반환
  return [
    ...(additionalRows || []), // 추가 정보 행 추가
  ];
}
