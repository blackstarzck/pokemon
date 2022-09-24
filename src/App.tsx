import React, { FC } from "react";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

export interface Props {

}

export const App: FC = (props: Props) => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}