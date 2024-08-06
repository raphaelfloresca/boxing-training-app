"use client"
import { LogType } from "mongoose/logs/schema";
import { useEffect, useState } from "react";

interface PropsInterface {
  logId: string;
}

const Logs = (props: PropsInterface): JSX.Element => {
  const { logId } = props;
  const [log, setLog] = useState<LogType | null>(null); const [loading, setLoading] = useState<boolean>(true);
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
            variables: { id: logId },
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
  }, [logId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {log && (
        <ul>
          <li>
            <b>ID: </b>
            {log._id}
          </li>
          <li>
            <b>User ID: </b>
            {log.userId}
          </li>
          <li>
            <b>Workouts: </b>
            <ul>
              {log.workouts.map((workout, index) => (
                <li key={index}>{workout}</li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Logs;
