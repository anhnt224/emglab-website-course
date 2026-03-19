"use client";

import React, { useEffect, useState } from "react";

interface UserCardProps {
  name: string;
  age: number;
  school?: string;
}

const UserCard = (props: UserCardProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <div className="text-3xl">
        {props.name} - {props.age}
      </div>
    </div>
  );
};

interface UserData {
  name: string;
  age: number;
  school?: string;
  address: string;
}

const UserPage = () => {
  const [users, setUsers] = useState<UserData[]>([
    // {
    //   name: "Trong Anh",
    //   age: 20,
    //   address: "HN",
    // },
    // {
    //   name: "Nam",
    //   age: 30,
    //   school: "BK",
    //   address: "HCM",
    // },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(">>> fetch api demo");

    setTimeout(() => {
      setUsers([
        ...users,
        {
          name: "Nam",
          age: 30,
          school: "BK",
          address: "HCM",
        },
      ]);
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasUser = users.length > 0;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <button
        onClick={() => {
          setUsers([
            ...users,
            {
              name: "Nam",
              age: 30,
              school: "BK",
              address: "HCM",
            },
          ]);
        }}
      >
        Add Random User
      </button>
      {loading && <div>Dang tai du lieu</div>}
      {hasUser
        ? users.map((user, index) => (
            <UserCard key={user.name} name={user.name} age={user.age} />
          ))
        : "Khong co user"}
    </div>
  );
};

export default UserPage;
