import { Request, Response } from "express";
import { identifyPlant } from "../services/plantIdentification.service";

export async function identifyPlantController(
  req: Request,
  res: Response
) {
  try {
    const { imageUrl } = req.body;

    const result = await identifyPlant(imageUrl);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      message: "Failed to identify plant",
    });
  }
}
