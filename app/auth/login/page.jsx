"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      toast.error(res.error, { position: "top-center" });
    } else {
      router.push("/");
    }
  });

  return (
    <div className="flex items-center justify-center bg-white px-4 py-16">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-24 rounded-xl bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xl">+IDEAS</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-black">
            Login
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Ingresa tu correo y contraseña para acceder a tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Correo
              </Label>
              <Input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Correo es requerido",
                  },
                })}
                id="email"
                type="email"
                placeholder="name@example.com"
                className="border-gray-300 focus:border-black focus:ring-black"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700">
                  Contraseña
                </Label>
              </div>
              <Input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Contraseña es requerido",
                  },
                })}
                id="password"
                type="password"
                placeholder="******"
                className="border-gray-300 focus:border-black focus:ring-black"
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
