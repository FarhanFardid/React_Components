import { useEffect, useState } from "react";
import DashboardTitle from "../../../../components/Headers/DashboardTitle";
import UsersList from "./UsersList";

const UserManagement = () => {
  const [usersDetails, setUsersDetails] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  useEffect(() => {
    const fetchUsersData = async () => {
      const response = await fetch(`http://localhost:3000/users`);
      const data = await response.json();
      console.log(data);
      setUsersDetails(data);
    };
    fetchUsersData();
  }, [refetchTrigger]);
  console.log(usersDetails);

  const triggerRefetch = () => {
    setRefetchTrigger(!refetchTrigger);
  };

  return (
    <div className="custom-admin-bg bg-no-repeat bg-center p-2 md:p-8 max-h-full md:h-full">
      <DashboardTitle
        main="Admin User Management"
        sub="Manage and Supervise User Profiles Seamlessly"
      ></DashboardTitle>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-[#5a9a08] font-semibold text-lg md:text-2xl py-3 md:py-5">
            Users List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Image</th>
                <th>User ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Location</th>
                <th>Reg. Date</th>
                <th>Role</th>
                {/* <th>Edit</th> */}
                <th>Remove User</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {usersDetails.map((user, index) => (
                <UsersList
                  key={user._id}
                  user={user}
                  index={index}
                  triggerRefetch={triggerRefetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
