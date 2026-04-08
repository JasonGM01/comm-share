import React from 'react';

function Categories(){
    return (
         <div className="App">
      <h1>Browse Categories</h1>

      <p>Select a category to explore available services or skilled helpers.</p>

      <div style={{ marginTop: "30px" }}>
        <button style={{ margin: "10px" }}>Home Services</button>
        <button style={{ margin: "10px" }}>Education & Tutoring</button>
        <button style={{ margin: "10px" }}>Technology Help</button>
        <button style={{ margin: "10px" }}>Errands & Assistance</button>
      </div>
    </div>


    );
}

export default Categories;