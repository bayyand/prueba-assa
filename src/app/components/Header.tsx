"use client";
import Link from "next/link";
import { HiHome, HiChevronRight } from "react-icons/hi";

type Props = {
  section: string;
};

export default function Header({ section }: Props) {
  return (
    <header className="bg-blue-600">
      <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
        <Link href={"/"} className="text-white">
          <HiHome className="w-6 h-6" />
        </Link>
        <span className="mx-3 text-white">
          <HiChevronRight className="w-6 h-6" />
        </span>
        <p className="text-blue-100 tracking-wide">{section}</p>
      </div>
    </header>
  );
}
