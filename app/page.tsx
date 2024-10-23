import Search from "ui/Search";
import Table from "ui/user/Table";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <p>Hello world!</p>
      <Search placeholder="Search..." />
      <Table query={query} currentPage={currentPage} />
    </div>
  );
}
