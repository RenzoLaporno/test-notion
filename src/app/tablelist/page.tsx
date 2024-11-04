"use client"; // Add this directive to specify a client component

import React, { useEffect, useState } from "react";

interface Table {
  id: string;
}

const TableList: React.FC = () => {
  const [data, setData] = useState<Table[]>([]);

  const fetchN = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/notion");
      const jsonData = await res.json();
      setData(jsonData.tables); // Adjust based on your API response structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchN(); // Fetch data when the component mounts
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-2xl font-bold">Table IDs</h1>
      <ul className="list-none p-0">
        {data.map((table) => (
          <li key={table.id} className="text-lg">
            -{table.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
