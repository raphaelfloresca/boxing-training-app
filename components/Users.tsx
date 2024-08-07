"use client"
import React from 'react';
import { useState, useEffect } from 'react'
import { UserType } from 'mongoose/users/schema';

interface PropsInterface {
    userId: string;
}

const Users = (props: PropsInterface): JSX.Element => {
    const { userId } = props;
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLog = async () => {
            try {
                const response = await fetch("/api/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query: `
                    query Query($id: String!) {
                      userById(_id: $id) {
                        _id
                        name
                        logs
                      }
                    }
                  `,
                 variables: { id: userId },
                    }),
                });
                const result = await response.json();
                if (response.ok) {
                    setUser(result.data.userById);
                } else {
                    setError(result.errors[0].message);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setLoading(false);
            }
        };
        fetchLog();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {user && (
                <ul>
                    <li>
                        <b>ID: </b>
                        {String(user._id)}
                    </li>
                    <li>
                        <b>Name: </b>
                        {String(user.name)}
                    </li>
                    <li>
                        <b>Logs: </b>
                        <ul>
                            {Array.isArray(user.logs) ? (
                                user.logs.map((log: string, index: number) => (
                                    <li key={index}>{log}</li>
                                ))
                            ) : (
                                <li>No logs available</li>
                            )}
                        </ul>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Users;