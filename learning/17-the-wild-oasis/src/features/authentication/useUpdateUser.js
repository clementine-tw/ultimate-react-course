import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("Successfully update user data");
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => toast.error(error),
  });

  return { updateUser, isUpdating };
}
