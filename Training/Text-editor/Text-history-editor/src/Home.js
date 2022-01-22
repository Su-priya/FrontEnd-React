import React from "react";

function Home() {

  const refreshPage = ()=>{
     window.location.reload();
  }

  return (
    <div>
      <h1>{Math.random()}</h1>
      <button onClick={refreshPage}>Refresh</button>
    </div>
  );
}