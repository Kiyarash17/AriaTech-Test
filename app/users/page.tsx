import { USERSLIST } from "@/config/users-list";
import PageClient from "./page-client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container space-y-10 py-2">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Users List</p>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Back Home
        </Link>
      </div>
      <PageClient usersList={USERSLIST} />
    </div>
  );
}
