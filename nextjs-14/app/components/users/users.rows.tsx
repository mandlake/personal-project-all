import { getAllUsers } from "@/redux/features/user-feature/user.slice";
import { useSelector } from "react-redux";

export default function UserRows() {
  const allUsers: [] = useSelector(getAllUsers);

  if (allUsers !== undefined) {
    console.log("allUsers is defined");
    console.log(allUsers);
  } else {
    console.log("allUsers is undefined");
    console.log(allUsers);
  }

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
