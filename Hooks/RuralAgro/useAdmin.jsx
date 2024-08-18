// react Query to find user role for Admin
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const fetchIsAdmin = async () => {
    if (!user?.email) {
      return false;
    }
    const response = await fetch(
      `http://localhost:3000/users/admin/${user.email}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.admin;
  };
  const {
    data: isAdmin,
    isLoading: isAdminLoading,
    error,
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: fetchIsAdmin,
    enabled: !!user?.email,
  });
  return { isAdmin, isAdminLoading, error };
};
export default useAdmin;
