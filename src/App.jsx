import "./styles.scss";

const App = () => {
  return (
    <div className="app">
      <h1>QR Code Generator</h1>

      <form>
        <input required type="url" placeholder="Enter a valid URL" />
        <input type="submit" value="Generate" />
      </form>

      {/* codes to conditionally display the QR code and a download button would go here */}
    </div>
  );
};

export default App;
