import { mockPlantProfiles } from "../../data/mockPlantProfiles";
import "./PlantProfile.css";

export function PlantProfile() {
  return (
    <section className="plant-profile-page">
      <header className="plant-profile-header">
        <h2>Plant profiles</h2>
        <p>Detailed information about identified plants.</p>
      </header>

      <div className="plant-profile-grid">
        {mockPlantProfiles.map((plant) => (
          <article className="plant-profile-card" key={plant.id}>
            <h3>{plant.commonName}</h3>

            <p>
              <strong>Common name:</strong> {plant.commonName}
            </p>

            <p>
              <strong>Scientific name:</strong> {plant.commonName}
            </p>

            <p>
              <strong>Type:</strong> {plant.type}
            </p>

            <h4>Care information</h4>
            <ul>
              <li>
                <strong>Watering:</strong> {plant.careInfo.watering}
              </li>
              <li>
                <strong>Sunlight:</strong> {plant.careInfo.sunlight}
              </li>
              <li>
                <strong>Soil:</strong> {plant.careInfo.soil}
              </li>
              <li>
                <strong>Humidity:</strong> {plant.careInfo.humidity}
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
