import AuthForm from "@/components/AuthForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return <AuthForm mode="signin" />;
}
