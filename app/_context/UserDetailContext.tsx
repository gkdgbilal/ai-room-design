import { User } from "@/types/User";
import { createContext, Dispatch } from "react";

interface UserDetailContextType {
  userDetail: User | null;
  setUserDetail: Dispatch<React.SetStateAction<User | null>>;
}

export const UserDetailContext = createContext<
  UserDetailContextType | undefined
>(undefined);
