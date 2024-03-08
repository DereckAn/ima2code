"use client";
import { useEffect, useState } from "react";

type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

const UserTable = () => {
  const [userData, setUserData] = useState<User[] | null>(null);

  const handleFetchData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_REACT_APP_API_URL_BASE + "/users/"
      );
      const data = await response.json();
      setUserData(data.users);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-secondary">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
            User ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
            First Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
            Last Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
            Password
          </th>
        </tr>
      </thead>
      <tbody className="bg-tertiary divide-y divide-gray-200">
        {userData?.map((user) => (
          <tr key={user?.user_id}>
            <td className="px-6 whitespace-nowrap">
              {user?.user_id || "-----"}
            </td>
            <td className="px-6 whitespace-nowrap">
              {user?.first_name || "-----"}
            </td>
            <td className="px-6 whitespace-nowrap">
              {user?.last_name || "-----"}
            </td>
            <td className="px-6 whitespace-nowrap">{user?.email || "-----"}</td>
            <td className="px-6 whitespace-nowrap">
              {user?.password || "-----"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
