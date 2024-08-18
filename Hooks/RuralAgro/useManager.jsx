import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useManager = () => {
  const { user } = useContext(AuthContext);
  const fetchIsManager = async () => {
    if (!user?.email) {
      return false;
    }
    const response = await fetch(
      `http://localhost:3000/users/manager/${user.email}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.manager;
  };
  const {
    data: isManager,
    isLoading: isManagerLoading,
    error,
  } = useQuery({
    queryKey: ["isManager", user?.email],
    queryFn: fetchIsManager,
    enabled: !!user?.email, // only run the query if the email exists
  });
  return { isManager, isManagerLoading, error };
};
export default useManager;
