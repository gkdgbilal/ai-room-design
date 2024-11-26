"use client";

import { useUser } from "@clerk/nextjs";
import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "./_context/UserDetailContext";
import { User } from "@/types/User";

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  const { user } = useUser();

  const [userDetail, setUserDetail] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      VerifyUser();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const VerifyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", {
      user: user,
    });

    setUserDetail(dataResult.data.result);
  };

  if (!userDetail) return <div>Loading...</div>;

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
};

export default Provider;
