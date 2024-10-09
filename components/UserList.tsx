"use client";

import { useState, useEffect } from 'react';
import { UserType } from 'mongoose/users/schema';
import { userMany } from 'lib/data';

function UserList() {
  const [users, setUsers] = useState<UserType[]>([]); // State to hold users
  const [error, setError] = useState<string | null>(null); // State to hold error message

  useEffect(() => {
    userMany()
      .then((response) => {
        const fetchedUsers = response.data.userMany; // Access the userMany array
        if (Array.isArray(fetchedUsers)) {
          setUsers(fetchedUsers); // Update state with the array of users
        } else {
          setError('Fetched data is not an array'); // Handle unexpected data
        }
      })
      .catch((err) => {
        setError(err.message); // Handle promise rejection
      });
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      List all the users
      {error && <p>Error: {error}</p>} {/* Display error message if any */}
      <ul>
        {users.map((user: UserType) => ( // Render the users from state
          <li key={String(user._id)}>{String(user.name)}</li> // Added key prop for list items
        ))}
      </ul>
    </div>
  );
}

export default UserList;
