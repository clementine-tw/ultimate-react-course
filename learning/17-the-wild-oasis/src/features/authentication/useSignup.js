import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => toast.success("Account successfully created!"),
    onError: () => toast.error("Failed to create account!"),
  });

  return { signup, isLoading };
}
