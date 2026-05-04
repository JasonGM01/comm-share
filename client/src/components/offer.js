import React from 'react';

function Offer(){
    return (
         <div className="App">
      <h1>Offer Your Skills</h1>

      <p>
        Share your skills with the community and help others who may need your expertise.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="What skill or service can you offer?"
          style={{
            width: "400px",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />

        <br />

        <button style={{ marginTop: "20px" }}>
          Submit Offer
        </button>
      </div>
    </div>


    );
}

export default Offer;

// test changes