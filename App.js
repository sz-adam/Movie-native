import Navigation from "./src/components/Navigation";
import { FavoritesProvider } from "./src/context/FavoritesContext";

export default function App() {
  return (
    <FavoritesProvider>
    <Navigation />
  </FavoritesProvider>
  );
}
