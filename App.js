import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from "./src/components/Navigation";
import { FavoritesProvider } from "./src/context/FavoritesContext";

export default function App() {
  return (
    <FavoritesProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
    <Navigation />
    </GestureHandlerRootView>
  </FavoritesProvider>
  );
}
