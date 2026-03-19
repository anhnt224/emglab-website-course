import React from "react";
import Image from "next/image";
import User from "./user";

const userCard = ({ user }: { user: User }) => {
  return (
    <div className="w-full border-2 border-[#FFD285] bg-[#FFFCF5] p-7">
      <p className="text-xl font-semibold">{user.title}</p>

      <div className="mt-20 flex gap-5">
        <Image
          src={user.image}
          alt="anh"
          width={50}
          height={50}
          className="h-12 w-12"
        />

        <div className="">
          <div className="flex gap-1">
            {Array(user.rating)
              .fill(0)
              .map((i) => (
                <div key={i}>★</div>
              ))}
          </div>
          <div>
            {user.name}, <br />
            {user.company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default userCard;
