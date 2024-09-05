"use client";
import React, { useState } from "react";

interface Person {
  name: string;
}

const people: Person[] = [
  { name: "Adri" },
  { name: "Becky" },
  { name: "Chris" },
  { name: "Dillon" },
  { name: "Erika" },
  { name: "Felix" },
  { name: "Gabe" },
  { name: "Holly" },
  { name: "Ivy" },
  { name: "Jack" },
  // Add more names as needed
];

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="mt-10 flex flex-col items-center py-32">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="mt-4 w-full max-w-md">
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person, index) => (
            <li key={index} className="border-b border-gray-200 p-2">
              {person.name}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
