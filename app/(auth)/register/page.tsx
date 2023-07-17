import AuthForm from "@/components/AuthForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return <AuthForm mode="register" />;
}
