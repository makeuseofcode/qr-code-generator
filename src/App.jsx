import { useState } from "react";
import "./styles.scss";
import QRCode from "qrcode";

const App = () => {
  const [url, setUrl] = useState("");
  const [dataUrl, setDataUrl] = useState("");

  const handleQRCodeGeneration = (e) => {
    e.preventDefault();
    QRCode.toDataURL(url, { width: 300 }, (err, dataUrl) => {
      if (err) console.error(err);
      setDataUrl(dataUrl);
    });
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>

      <form onSubmit={handleQRCodeGeneration}>
        <input
          required
          type="url"
          placeholder="Enter a valid URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" value="Generate" />
      </form>

      {/* codes to conditionally display the QR code and a download button would go here */}
      {dataUrl && (
        <div className="generated-view">
          <img src={dataUrl} alt="qr code" />
          <a href={dataUrl} download="qrcode.png">
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
