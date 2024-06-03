"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserCard from "@/components/users/cards";
import { useState } from "react";

type Props = {
  usersList: {
    name: string;
    email: string;
  }[];
};

export default function PageClient(props: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container py-5 space-y-10">
      <div className="flex w-full sm:w-1/2 mx-auto justify-center">
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <Button>Search</Button> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {props.usersList
          .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          ?.map((user, index) => (
            <UserCard data={user} key={index} />
          ))}
      </div>
    </div>
  );
}
