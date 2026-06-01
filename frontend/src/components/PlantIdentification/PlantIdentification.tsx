import { useState } from "react";

interface PlantPrediction {
  species: string;
  confidence: number;
}

export default function PlantIdentification() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [result, setResult] = useState<PlantPrediction | null>(null);
  const [error, setError] = useState<string>("");

  const handleIdentify = async () => {
    setError("");

    try {
      const response = await fetch("/api/plants/identify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl }),
      });

      if (!response.ok) {
        throw new Error("Identification failed");
      }

      const data: PlantPrediction = await response.json();
      setResult(data);
    } catch {
      setError("Failed to identify plant. Try again.");
      setResult(null);
    }
  };

  return (
    <div>
      <h2>Plant Identification</h2>

      <input
        type="text"
        value={imageUrl}
        placeholder="Enter image URL"
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <button onClick={handleIdentify}>Identify Plant</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <p>Species: {result.species}</p>
          <p>Confidence: {Math.round(result.confidence * 100)}%</p>
        </div>
      )}
    </div>
  );
}
