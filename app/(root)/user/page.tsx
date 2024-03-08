'use client';
import { useEffect, useState } from "react";

interface User {
  user: {
    first_name: string;
    last_name: string;
    // Add other properties as needed
  };
  info: {
    profile_bio: string;
    // Add other properties as needed
  };
}

const UserInformation = () => {
  const [user, setUser] = useState<User | null>(null);
  const userId = typeof window !== 'undefined' ? window.sessionStorage.getItem("user_id") : null;
  const userIdNum = userId ? parseInt(userId) : 0;
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_REACT_APP_API_URL_BASE + `/users/user/${userIdNum}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.user.first_name} {user.user.last_name}</h1>
      <p>{user.info.profile_bio}</p>
    </div>
  );
};

export default UserInformation;