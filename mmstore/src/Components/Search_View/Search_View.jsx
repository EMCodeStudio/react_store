import React, { useState } from "react";

function SearchView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    search(event.target.value);
  };

  const search = (searchTerm) => {
    const data = ["Manzana", "Banana", "Pera", "Uva", "Melón", "Sandía"];
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchView;
