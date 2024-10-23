"use client";

import { useEffect, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

export default function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const GET_USER_BY_ID = gql`
    query Query($id: String!) {
      userById(_id: $id) {
        _id
        name
        logs
      }
    }
  `;

  const UPDATE_USER_BY_ID = gql`
    mutation Mutation($id: String!, $record: UpdateByIdusersInput!) {
      userUpdateById(_id: $id, record: $record) {
        record {
          _id
          name
        }
      }
    }
  `;

  const {
    loading: getUserLoading,
    error: getUserError,
    data: users,
  } = useQuery(GET_USER_BY_ID, { variables: { id: query } });

  const [
    handleNameChange,
    { loading: updateUserLoading, error: updateUserError, data: updatedUser },
  ] = useMutation(UPDATE_USER_BY_ID);

  const [name, setName] = useState(users?.userById?.name || "");

  const handleUpdate = () => {
    handleNameChange({ variables: { id: users.userById._id, record: { name } } });
  };

  useEffect(() => {
    if (users?.userById) {
      setName(users.userById.name);
    }
  }, [users]);

  if (getUserLoading || updateUserLoading) return <p>Loading...</p>;
  if (getUserError) return <p>Error: {getUserError.message}</p>;
  if (updateUserError) return <p>Error: {updateUserError.message}</p>;

  return (
    <div>
      {users.userById ? (
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
              <td>
                <input
                  type="text"
                  value={users.userById._id}
                  readOnly
                  disabled
                />
              </td>
              <td>
                <input
                  type="text"
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </td>
              <td>
                <button type="button" onClick={handleUpdate}>Update</button>
                <button type="button">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No such data</p>
      )}
    </div>
  );
}
