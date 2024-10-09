import UserList from "components/UserList";
import UserInput from "components/UserInput";
import Search from "ui/search";
import Table from "ui/table";
import {userMany} from "lib/data";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const users = userMany();

  return (
    <div>
      <p>Hello world!</p>
      <UserInput />
      <UserList />
      <Search placeholder="Search..." />
    </div>
  );
}
