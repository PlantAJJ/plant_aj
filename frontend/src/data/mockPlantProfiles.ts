export type PlantProfile = {
  id: number;
  commonName: string;
  scientificName: string;
  type: string;
  careInfo: {
    watering: string;
    sunlight: string;
    soil: string;
    humidity: string;
  };
};

export const mockPlantProfiles: PlantProfile[] = [
  {
    id: 1,
    commonName: "Monstera",
    scientificName: "Monstera deliciosa",
    type: "Indoor plant",
    careInfo: {
      watering: "Water once a week when the top soil is dry.",
      sunlight: "Bright, indirect light.",
      soil: "Well-draining potting soil.",
      humidity: "Prefers medium to high humidity.",
    },
  },
  {
    id: 2,
    commonName: "Snake Plant",
    scientificName: "Dracaena trifasciata",
    type: "Indoor plant",
    careInfo: {
      watering: "Water every 2 weeks and avoid overwatering.",
      sunlight: "Low to bright indirect light.",
      soil: "Sandy, well-draining soil.",
      humidity: "Tolerates normal indoor humidity.",
    },
  },
  {
    id: 3,
    commonName: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    type: "Flowering plant",
    careInfo: {
      watering: "Keep soil lightly moist, but not soggy.",
      sunlight: "Medium, indirect light.",
      soil: "Rich, well-draining potting mix.",
      humidity: "Likes higher humidity.",
    },
  },
  {
    id: 4,
    commonName: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    type: "Succulent",
    careInfo: {
      watering: "Water every 2-3 weeks and let soil dry out.",
      sunlight: "Bright, direct or indirect light.",
      soil: "Cactus or succulent soil mix.",
      humidity: "Prefers dry air.",
    },
  },
];
