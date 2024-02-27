"use client";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { database } from "./firebaseConfig";

interface User {
  id: string;
  emailVerified: boolean;
  isAnonymous: boolean;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const usersRef = ref(database, "users");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersArray: User[] = Object.entries(snapshot.val()).map(
            ([id, userData]: [string, any]) => ({
              ...userData,
              id,
            })
          );
          setUsers(usersArray);
        } else {
          console.log("No data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto pt-52">
      <h1 className="text-2xl font-bold text-center pb-9">fetch data from Realtime DB</h1>
      <div className="grid grid-cols-3 gap-4">
        {users.map((users: any) => (
          <div key={users.id} className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl text-gray-900">{users.title}</h2>
            <p className="text-gray-500">{users.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
