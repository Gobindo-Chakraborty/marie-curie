import HomePage from "./pages/home/HomePage";
import WIP from "./components/WIP";

function App() {
  document.documentElement.setAttribute("data-theme", "dark");
  return (
    <>
      <HomePage />
      <WIP />
    </>
  );
}

export default App;
