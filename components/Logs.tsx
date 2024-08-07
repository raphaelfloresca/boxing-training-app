"use client"
import React from 'react';
import { LogType } from "mongoose/logs/schema";
import { useEffect, useState } from "react";

const Logs = (props: LogType): JSX.Element => {
  const { _id } = props;
  const [log, setLog] = useState<LogType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const response = await fetch("/api/graphql2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query log($id: String!) {
                logById(_id: $id) {
                  _id
                  userId
                  workouts
                }
              }
            `,
            variables: { id: _id },
          }),
        });
        const result = await response.json();
        if (response.ok) {
          setLog(result.data.logById);
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
  }, [_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {log && (
        <ul>
          <li>
            <b>ID: </b>
            {String(log._id)}
          </li>
          <li>
            <b>User ID: </b>
            {String(log.userId)}
          </li>
          <li>
            <b>Workouts: </b>
            <ul>
              {Array.isArray(log.workouts) ? (
                log.workouts.map((workout: string, index: number) => (
                  <li key={index}>{workout}</li>
                ))
              ) : (
                <li>No workouts available</li>
              )}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Logs;
