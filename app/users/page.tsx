import { USERSLIST } from "@/config/users-list";
import PageClient from "./page-client";

export default function Page() {
  return <PageClient usersList={USERSLIST} />;
}
