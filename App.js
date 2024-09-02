import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { RootNavigation } from "./src/navigation/RootNavigation";
import Initializer from "./src/components/Initializer"; // Import the modified Initializer component

export default function App() {
  return (
    <Provider store={store}>
      <Initializer>
        <RootNavigation />
      </Initializer>
    </Provider>
  );
}