export interface PlantPrediction {
  species: string;
  confidence: number;
}

export async function identifyPlant(
  imageUrl: string
): Promise<PlantPrediction> {
  if (!imageUrl) {
    throw new Error("Missing image URL");
  }
  return {
    species: "Monstera Deliciosa",
    confidence: 0.96,
  };
}
