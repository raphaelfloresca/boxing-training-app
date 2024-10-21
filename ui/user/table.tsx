"use client";

import { useEffect, useState } from "react";
import { userById, updateByIdusersInput } from "lib/data";
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

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (users) {
      console.log("update");
      try {
        await updateByIdusersInput(users._id, users.name);
        console.log("Update successful");
      } catch (error) {
        console.error("Update failed", error);
      }
    }
  };

  const handleDelete = () => {
    console.log("delete")
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (users) {
      setUsers({ ...users, name: event.target.value }); // Update the users state with the new name
    }
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
                <td><input type="text" value={users._id} readOnly disabled /></td>
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
        <p>No such data</p>
      )}
    </div>
  );
}
