"use client";

import { useEffect, useState } from "react";
import { userById } from "lib/data";
import { UserType } from "mongoose/users/schema";

export default function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const [users, setUsers] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await userById(query) as { data: UserType };
      setUsers(result);
    };
    fetchUser();
  }, [query]);

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("update")
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChange Name")
  };

  const handleDelete = () => {
    console.log("delete")
  };

  return (
    <div>
      {users ? ( 
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td><input type="text" value={users._id} readOnly disabled/></td>
                  <td><input type="text" value={users.name} onChange={handleNameChange} /></td>
                  <td>
                    <button type="submit">Update</button>
                    <button type="button" onClick={handleDelete}>Delete</button>
                  </td>
                </tr>
            </tbody>
          </table>
        </form>
      ) : (
        <p>No such data</p> // Message when users does not exist
      )}
    </div>
  );
}
