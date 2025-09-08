import { useState } from "react";
import Navbar from "./components/Navbar";
import SortingMatch from "./components/SortingMatch";
import { selectionSortWithSteps,
  bubbleSortWithSteps,
  insertionSortWithSteps,
  mergeSortWithSteps,
  quickSortWithSteps,
  heapSortWithSteps } from "./sortingalgo";

function App() {
  const [title, setTitle] = useState("Sort");
  const [data, setdata] = useState("");
  const [dataConverted, setDataConverted] = useState([]);

  function handledataChange(event){
    setdata(event.target.value);
  }
  async function handleRun(){
    setDataConverted(
  data
    .split(",") 
    .map(num => Number(num.trim())) 
    .filter(num => !isNaN(num))  
);
if(title==="Selection Sort"){
  await selectionSortWithSteps(data
      .split(",") 
      .map(num => Number(num.trim())) 
      .filter(num => !isNaN(num)),setDataConverted);
}
else if(title==="Bubble Sort"){
 await bubbleSortWithSteps(
  data
      .split(",") 
      .map(num => Number(num.trim())) 
      .filter(num => !isNaN(num)),setDataConverted, 10
 )
}
else if(title==="Insertion Sort"){
 await insertionSortWithSteps(
  data
      .split(",") 
      .map(num => Number(num.trim())) 
      .filter(num => !isNaN(num)),setDataConverted, 10
 )
}
else if(title==="Merge Sort"){
 await mergeSortWithSteps(
  data
      .split(",") 
      .map(num => Number(num.trim())) 
      .filter(num => !isNaN(num)),setDataConverted
 )
}
else if(title==="Quick Sort"){
 await quickSortWithSteps(
  data
      .split(",") 
      .map(num => Number(num.trim())) 
      .filter(num => !isNaN(num)),setDataConverted
 )
}
else if(title==="Heap Sort"){
 await heapSortWithSteps(
  data
      .split(",") 
      .map(num => Number(num.trim())) 
      .filter(num => !isNaN(num)),setDataConverted
 )
}
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#eef2f7" }}>
      <Navbar setTitle={setTitle} />

      <div className="d-flex flex-column align-items-center justify-content-center p-4">
        {/* Title */}
        <h1 className="fw-bold display-4 text-primary my-4">{title}</h1>

        {/* Input Section */}
        <div className="card shadow-lg p-4 rounded-4 w-75" style={{ maxWidth: "600px" }}>
          <label className="form-label fw-semibold fs-5 mb-2">
            Enter numbers (comma separated):
          </label>
          <textarea
            value={data}
            onChange={handledataChange}
            className="form-control fs-6 rounded-3"
            rows="4"
            placeholder="e.g. 5, 3, 8, 1, 2"
          ></textarea>
          {title==="Sort"?<div>⚠️Select Algorithm from the dropdown</div>:null}
          {data===""?<div>⚠️Enter Data inside</div>:null}

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-4">
            <button className={`btn btn-outline-secondary me-2 ${data===""?"disabled":""}`} onClick={()=>{
              setdata("");
              setDataConverted([]);
              }}>Clear</button>
            <button className={`btn btn-primary fw-semibold ${title==="Sort" || data===""?"disabled":""}`} onClick={handleRun}>
              Run {title}
            </button>
          </div>
        </div>
        <SortingMatch dataConverted={dataConverted}/>

      </div>
    </div>
  );
}

export default App;
