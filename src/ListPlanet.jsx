import planetName from "./DataPlanet.jsx"; 

const ListPlanet = () => {
  return (
   
    <div className="list-planet">
      {planetName.map((planet) => (
        <div className="planet-item" key={planet.id}>
          <img src={planet.src} alt={planet.name} />
          <h2>{planet.name}</h2>
          <p>Jarak: {planet.range} juta km</p>
        </div>
        ))}
      </div>

    );
  };

export default ListPlanet;