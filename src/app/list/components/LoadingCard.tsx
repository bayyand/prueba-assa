"use client";
import { FaUser } from "react-icons/fa";

export default function LoadingCard() {
  return (
    <div className="flex items-center bg-gray-300 rounded-lg text-gray-600 shadow-md shadow-gray-300 py-4 font-semibold w-72 max-w-xs tracking-tight text-sm animate-pulse">
      <div className="bg-gray-400 px-2 py-2 inline-block ml-3 rounded-lg">
        <FaUser className="w-4 h-4 text-white" />
      </div>
      <h2 className="ml-4">Loading...</h2>
    </div>
  );
}
