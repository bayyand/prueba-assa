import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-[#f9fafb]">
      <div className="grid grid-cols-1 gap-4">
        <Link
          href={"/tasks"}
          className="w-72 h-16 bg-blue-600 hover:bg-blue-800 text-blue-100 font-medium tracking-wide rounded-md flex items-center justify-center"
        >
          Tasks
        </Link>
        <Link
          href={"/list"}
          className="w-72 h-16 bg-blue-600 hover:bg-blue-800 text-blue-100 font-medium tracking-wide rounded-md flex items-center justify-center"
        >
          List
        </Link>
      </div>
    </main>
  );
}
