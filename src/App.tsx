import NameGenerator from "./pages/NameGenerator";
import NameGeneratorProvider from "./contexts/NameGeneratorContext";

const App = () => {
  return (
    <NameGeneratorProvider>
      <NameGenerator />
    </NameGeneratorProvider>
  );
};

export default App;
