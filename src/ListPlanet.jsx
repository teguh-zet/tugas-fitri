// function App(){
//     return(
//       <>
//       <h1>{nama}</h1>
//       <div>
//         <BelajarReact />
//       </div>
//       <div className="css">
//         {antariksa.map((cuprit)=>
//           <div key={cuprit.id}
//           style={{
//             backgroundColor : "black",
//             color:"white"
//           }}>
//             <h1>{cuprit.name}</h1>
//             <h2>{cuprit.age}</h2>
//           </div>  
//         )}
//       </div>
//     </>
//     )
//   }
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