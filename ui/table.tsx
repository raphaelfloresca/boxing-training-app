interface TableProps {
  _id: string;
  name: string;
  logs: string[];
}

export default function Table(props: TableProps) {
  return (
    <div>
      {props && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Logs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{String(props._id)}</td>
              <td>{String(props.name)}</td>
              <td>
                <ul>
                  {Array.isArray(props.logs) && props.logs.length > 0 ? (
                    props.logs.map((log: string, index: number) => (
                      <li key={index}>{log}</li>
                    ))
                  ) : (
                    <li>No logs available</li>
                  )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
