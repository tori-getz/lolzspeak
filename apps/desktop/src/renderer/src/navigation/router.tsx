import { createHashRouter } from "react-router-dom";
import { ScreenNames } from "./screen-names.enum";
import { CreateAccountScreen } from "~/screens/account";
import { AppScreen } from "~/screens/app";
import { SettingsScreen } from "~/screens/settings";

export const router = createHashRouter([
  {
    path: ScreenNames.CreateAccount,
    element: <CreateAccountScreen />
  },
  {
    path: ScreenNames.Home,
    element: <AppScreen />
  },
  {
    path: ScreenNames.Settings,
    element: <SettingsScreen />
  }
])
