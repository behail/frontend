import Statistics from "./components/stastics/Statistics";
import SongList from "./components/SongList";
import { Text, Spacer } from "./styledSystem/StyledSystemComponents";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <Spacer />
        <Text color="#000">Addis</Text> <Text color="#a8329e">Music</Text>
        <Spacer />
      </header>
      <main className="wrapper">
        <SongList />
        <Statistics />
      </main>
    </div>
  );
}

export default App;
