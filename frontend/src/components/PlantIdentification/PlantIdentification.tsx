import { useState } from "react";

export default function PlantIdentification() {

  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleIdentify = async () => {

    const response = await fetch("/api/plants/identify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        imageUrl
      })
    });

    const data = await response.json();

    setResult(data);
  };

  return (
    <div>
      <h2>Plant Identification</h2>

      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <button onClick={handleIdentify}>
        Identify Plant
      </button>

      {result && (
        <div>
          <p>Species: {result.species}</p>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}
