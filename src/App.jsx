import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";

function App() {
  return (
    <>
    <div class="wrapper">
      <Clock timeZone={"Europe/Paris"} city="Paris" />
      <Clock timeZone={"America/New_York"} city="New York" />
      <Clock timeZone={"Asia/Tokyo"} city="Tokyo" />
      <Clock timeZone={"Europe/Stockholm"} city="Stockholm" />
    </div>
    <div class="wrapper">
      <Timer startingTime={60 * 8} title="Eggs" />
      <Timer startingTime={60 * 15} title="Nuggets"/>
      <Timer startingTime={60} title="Timer"/>
    </div>
    </>
  );
}

export default App;
