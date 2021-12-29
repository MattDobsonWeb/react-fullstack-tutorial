import "./main.scss";
import Layout from "./components/Layout";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Layout />
    </GlobalProvider>
  );
}

export default App;
