import React, { useState, useEffect } from "react";
import './style.scss';
import { servicesCategories } from "../../Axios_Services/Services_Categories/Services_Categories";

function SearchView() {

  const [categoryName, setCategoryName] = useState([]);
  const [checkBoxValue, setCheckBoxValue] = useState({})

  const handleOnCheckBox = (event) => {
    setCategoryName({
      ...categoryName,
      [event.target.value]: event.target.checked
    });

  };

  const fetchCategoryName = async () => {
    const result = await servicesCategories();
    setCategoryName(result.data);
  };

  console.log('RESPONSE: ', categoryName);

  useEffect(() => {
    fetchCategoryName();
  }, []);

  return (
    <div className="search-container">

      <h1>Filtros</h1>

      {categoryName.map((dataCategoryName, index) => {


        return (
          <div className="checks" key={index}>
            <input
              onChange={handleOnCheckBox}
              type="checkbox"
              name={dataCategoryName}
              value={dataCategoryName}
              id={dataCategoryName} />
            <label htmlFor={dataCategoryName}>{dataCategoryName}</label>
          </div>
        )
      })}
    </div>
  );
}

export default SearchView;
