import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBuyer = () => {
  const { user } = useContext(AuthContext);
  const fetchIsBuyer = async () => {
    if (!user?.email) {
      return false;
    }
    const response = await fetch(
      `http://localhost:3000/users/buyer/${user.email}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.buyer;
  };
  const {
    data: isBuyer,
    isLoading: isBuyerLoading,
    error,
  } = useQuery({
    queryKey: ["isBuyer", user?.email],
    queryFn: fetchIsBuyer,
    enabled: !!user?.email, // only run the query if the email exists
  });

  return { isBuyer, isBuyerLoading, error };
};

export default useBuyer;
