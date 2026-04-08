import "./../App.css";

function Request(){
    return (
        <div className="App">
      <h1>Request a Service</h1>

      <p>
        Tell the community what kind of help or skill you’re looking for.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Describe the service you need..."
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
          Submit Request
        </button>
      </div>
    </div>


    )
}

export default Request;