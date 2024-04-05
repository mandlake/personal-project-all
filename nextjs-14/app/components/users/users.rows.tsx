import { getAllUsers } from "@/redux/features/user-feature/user.slice";
import { useSelector } from "react-redux";

export default function UserRows() {
  const allUsers: [] = useSelector(getAllUsers);
  const additionalRows = allUsers?.map((user: IUser) => ({
    id: user.id,
    username: user.username,
    password: user.password,
    phoneNumber: user.phone_number,
    name: user.name,
    job: user.job,
  }));

  return [...(additionalRows || [])];
}
