export interface PlantPrediction {
  species: string;
  confidence: number;
}

export async function identifyPlant(
  imageUrl: string
): Promise<PlantPrediction | null> {

  // Mock AI prediction

  if (!imageUrl) {
    return null;
  }

  return {
    species: "Monstera Deliciosa",
    confidence: 96
  };
}
