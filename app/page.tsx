import Search from "ui/search";
import Table from "ui/user/table";

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
