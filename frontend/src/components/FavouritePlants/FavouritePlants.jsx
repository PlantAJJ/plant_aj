import { useState } from 'react';
import { mockPlants } from '../../data/mockPlants';
import './FavouritePlants.css';

export function FavouritePlants() {
  const [savedPlants, setSavedPlants] = useState([]);

  const isPlantSaved = (plantId) => {
    return savedPlants.some((plant) => plant.id === plantId);
  };

  const savePlant = (plant) => {
    if (isPlantSaved(plant.id)) {
      return;
    }

    setSavedPlants((currentPlants) => [...currentPlants, plant]);
  };

  const removePlant = (plantId) => {
    setSavedPlants((currentPlants) =>
      currentPlants.filter((plant) => plant.name !== plantId)
    );
  };

  return (
    <section className="favourite-plants-page">
      <header className="favourite-plants-header">
        <h1>Favourite Plants</h1>
        <p>
          Save plants to your personal collection and track them later from your
          dashboard.
        </p>
      </header>

      <div className="plants-layout">
        <section className="plants-section">
          <h2>Available plants</h2>

          <div className="plants-grid">
            {mockPlants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <h3>{plant.name}</h3>
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
          <h2>User dashboard</h2>

          {savedPlants.length === 0 ? (
            <p className="empty-message">No favourite plants saved yet.</p>
          ) : (
            <div className="saved-plants-list">
              {savedPlants.map((plant) => (
                <article className="saved-plant-card" key={plant.id}>
                  <div>
                    <h3>{plant.name}</h3>
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
