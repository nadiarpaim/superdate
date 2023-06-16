import ScubaDiving from "./ScubaDiving.jpg";
import MiniGolf from "./Mini-Golf.jpg";
import BoatTrip from "./Boat-Trip.jpg";
import Cinema from "./Cinema.jpg";

export const InitialResults = () => {
  return (
    <div class="d-flex justify-content-center flex-wrap gap-3 InitialResultsCards">
      <div class="card">
        <img src={Cinema} class="card-img-top" alt="Cinema" />
        <div class="card-body">
          <h5 class="card-title text-center">Cinema</h5>
        </div>
      </div>
      <div class="card">
        <img src={MiniGolf} class="card-img-top" alt="Mini Golf" />
        <div class="card-body">
          <h5 class="card-title text-center">Mini Golf</h5>
        </div>
      </div>
      <div class="card">
        <img src={ScubaDiving} class="card-img-top" alt="Scuba Diving" />
        <div class="card-body">
          <h5 class="card-title text-center">Scuba Diving</h5>
        </div>
      </div>
      <div class="card">
        <img src={BoatTrip} class="card-img-top" alt="Boat Trip" />
        <div class="card-body">
          <h5 class="card-title text-center">Boat Trip</h5>
        </div>
      </div>
    </div>
  );
};
