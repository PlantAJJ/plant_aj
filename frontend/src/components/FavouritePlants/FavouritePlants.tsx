import { useState } from 'react';
import { mockPlants, type Plant } from '../../data/mockPlants';
import './FavouritePlants.css';

export function FavouritePlants() {
  const [savedPlants, setSavedPlants] = useState<Plant[]>([]);

  const isPlantSaved = (plantId: number) => {
    return savedPlants.some((plant) => plant.id === plantId);
  };

  const savePlant = (plant: Plant) => {
    if (isPlantSaved(plant.id)) {
      return;
    }

    setSavedPlants((currentPlants) => [...currentPlants, plant]);
  };

  const removePlant = (plantId: number) => {
    setSavedPlants((currentPlants) =>
      currentPlants.filter((plant) => plant.name !== String(plantId))
    );
  };

  return (
    <section className="favourite-plants-page">
      <header className="favourite-plants-header">
        <h2>Favourite Plants</h2>
        <p>
          Save plants to your personal collection and track them later from your
          dashboard.
        </p>
      </header>

      <div className="plants-layout">
        <section className="plants-section">
          <h3>Available plants</h3>

          <div className="plants-grid">
            {mockPlants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <h4>{plant.name}</h4>
                <p>{plant.type}</p>

                <ul>
                  <li>
                    <strong>Watering:</strong> {plant.watering}
                  </li>
                  <li>
                    <strong>Sunlight:</strong> {plant.sunlight}
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => savePlant(plant)}
                  disabled={isPlantSaved(plant.id)}
                >
                  {isPlantSaved(plant.id) ? 'Saved' : 'Save plant'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <h3>User dashboard</h3>

          {savedPlants.length === 0 ? (
            <p className="empty-message">No favourite plants saved yet.</p>
          ) : (
            <div className="saved-plants-list">
              {savedPlants.map((plant) => (
                <article className="saved-plant-card" key={plant.id}>
                  <div>
                    <h4>{plant.name}</h4>
                    <p>{plant.type}</p>
                  </div>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => removePlant(plant.id)}
                  >
                    Delete
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
