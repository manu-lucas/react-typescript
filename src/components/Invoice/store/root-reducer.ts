// Redux.
import { combineReducers } from "redux";
import type { AppActions } from "./app/app-actions";
import { InvoiceActions } from "./invoice/invoice-actions";
import { ISettingsActions } from "./settings/settings-actions";
// Reducers.
import { appReducer, IAppState } from "./app/app-reducer";
import invoiceReducer, { IInvoiceState } from "./invoice/invoice-reducer";
import settingsReducer, { ISettingsState } from "./settings/settings-reducer";
import { Reducer } from "redux";

// Interfaces.
export interface RootState {
  app: IAppState;
  settings: ISettingsState;
  invoice: IInvoiceState;
}

// Root reducer.
export const rootReducer = combineReducers({
  app: appReducer,
  settings: settingsReducer,
  invoice: invoiceReducer,
} as {
  app: Reducer<IAppState, AppActions>;
  settings: Reducer<ISettingsState, ISettingsActions>;
  invoice: Reducer<IInvoiceState, InvoiceActions>;
});
