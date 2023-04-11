import { createHashRouter } from "react-router-dom";
import { ScreenNames } from "./screen-names.enum";
import { CreateAccountScreen } from "~/screens/account";
import { AppScreen } from "~/screens/app";

export const router = createHashRouter([
  {
    path: ScreenNames.CreateAccount,
    element: <CreateAccountScreen />
  },
  {
    path: ScreenNames.Home,
    element: <AppScreen />
  }
])
