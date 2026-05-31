import { Request, Response } from "express";
import { identifyPlant } from "../services/plantIdentificationService";

export async function identifyPlantController(
  req: Request,
  res: Response
) {

  const imageUrl = req.body.imageUrl;

  const prediction = await identifyPlant(imageUrl);

  if (!prediction) {
    return res.status(500).json({
      message: "Plant could not be identified"
    });
  }

  return res.json(prediction);
}
