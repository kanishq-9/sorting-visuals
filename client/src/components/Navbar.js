import React, { useState } from "react";

function Navbar({setTitle}) {
  const [selectedAlgo, setSelectedAlgo] = useState("Select Algorithm");

  const handleSelect = (algo) => {
    setSelectedAlgo(algo);
    setTitle(algo);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary px-3">
      <div className="navbar-brand fw-bold text-light" >
        SORT
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedAlgo}
            </div>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <button className="dropdown-item" onClick={() => handleSelect("Bubble Sort")}>
                  Bubble Sort
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => handleSelect("Selection Sort")}>
                  Selection Sort
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => handleSelect("Insertion Sort")}>
                  Insertion Sort
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => handleSelect("Merge Sort")}>
                  Merge Sort
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => handleSelect("Quick Sort")}>
                  Quick Sort
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => handleSelect("Heap Sort")}>
                  Heap Sort
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
