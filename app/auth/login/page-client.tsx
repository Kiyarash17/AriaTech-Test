import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function PageClient() {
  return (
    <div className="h-screen flex">
      <div
        className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
      >
        <div
          className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
        ></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-sans">
            AriaTech | Login
          </h1>
          <p className="text-white mt-1">Welcome to login page👋</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <Link href="#" className={buttonVariants({ variant: "secondary" })}>
              Back Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form className="bg-white rounded-md shadow-2xl p-5 space-y-4">
            <h1 className="font-bold text-2xl ">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600">Welcome Back</p>

            <div className="space-y-3">
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Password" type="password" />

              <Button variant="default" className="w-full !mt-7">
                Login
              </Button>
            </div>

            <div className="flex justify-between items-center flex-wrap">
              <Link href="#" className={buttonVariants({ variant: "ghost" })}>
                Forgot Password ?
              </Link>
              <Link href="#" className={buttonVariants({ variant: "ghost" })}>
                Don&apos;t have an account yet?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
