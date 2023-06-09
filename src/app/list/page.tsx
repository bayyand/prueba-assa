"use client";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import Header from "../components/Header";
import { getAllUsers } from "./service";
import LoadingCard from "./components/LoadingCard";

interface User {
  id: number;
  name: string;
  avatar: string;
  createdAt: Date;
}

export default function List() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      getAllUsers()
        .then((result: User[]) => setUsers(result))
        .finally(() => {
          setLoading(false);
        });
    };
    loadUsers();
  }, []);

  return (
    <>
      <Header section="Tasks" />
      <main className="flex justify-center">
        {loading == true ? (
          <section className="mt-6 grid grid-cols-1 gap-2">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </section>
        ) : (
          <section className="mt-6 grid grid-cols-1 gap-2">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center bg-slate-100 rounded-lg text-blue-600 shadow-md shadow-gray-300 py-4 font-semibold w-72 max-w-xs tracking-tight text-sm"
              >
                <div className="bg-blue-600 px-2 py-2 inline-block ml-3 rounded-lg">
                  <FaUser className="w-4 h-4 text-white" />
                </div>
                <h2 className="ml-4">{user.name}</h2>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
