import { Metadata } from "next";
import PageClient from "./page-client";


export const metadata:Metadata = {
    title: "Aria Tech | Login"
}

export default function Page() {
  return <PageClient />;
}
