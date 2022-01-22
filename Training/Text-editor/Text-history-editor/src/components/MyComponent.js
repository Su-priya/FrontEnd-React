import React from 'react';

function Comp() {
  
  function refreshPage() {
    window.location.reload();
  }
  
  return (
    <div>
      <button onClick={ refreshPage }>Submit</button>
    </div>
  );
}

export default Comp;