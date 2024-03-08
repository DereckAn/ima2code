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
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {userData?.map((user, index) => (
          <tr key={user?.user_id}>
            <td>{user?.user_id}</td>
            <td>{user?.first_name}</td>
            <td>{user?.last_name}</td>
            <td>{user?.email}</td>
            <td>{user?.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
