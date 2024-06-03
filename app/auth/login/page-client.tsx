"use client";

import { Api, login } from "@/api/Api";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast/use-toast";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ReloadIcon } from "@radix-ui/react-icons";
import Cookies from "js-cookie";

const FormSchema = z.object({
  mobile: z.string().min(11, {
    message: "Please enter your Mobile",
  }),
  password: z.string().min(7, {
    message: "Password should be more than 7 character",
  }),
});

export default function PageClient() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);

    const respData = await login(data.mobile, data.password)
      .then((response) => {
        setLoading(false);
        Cookies.set("token", response.token, {
          secure: true,
          expires: 360,
        });
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          variant: "destructive",
        });
      });
  }

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
            <Link href="/" className={buttonVariants({ variant: "secondary" })}>
              Back Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <div className="bg-white rounded-md shadow-2xl p-5 space-y-4">
            <h1 className="font-bold text-2xl ">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600">Welcome Back</p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Mobile</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={loading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Password</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={loading} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="rounded-3xl gap-2 px-10 py-6 w-full bg-black text-white hover:bg-gray-900 items-center"
                  disabled={loading}
                >
                  Sign In
                  {loading && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                </Button>
              </form>
            </Form>

            <div className="flex justify-between items-center flex-wrap">
              <Link href="#" className={buttonVariants({ variant: "ghost" })}>
                Forgot Password ?
              </Link>
              <Link href="#" className={buttonVariants({ variant: "ghost" })}>
                Don&apos;t have an account yet?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
