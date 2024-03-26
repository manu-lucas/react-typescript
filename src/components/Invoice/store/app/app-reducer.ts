// App action types.
import { AppActionTypes as Types } from "./app-actions.enum";
import type { AppActions } from "./app-actions";
import type { IPayloadSetAlert } from "./app.interfaces";
import { Reducer } from "redux";

// App state definition.
export interface IAppState {
  app_isLoading: boolean;
  app_showDrawerPreviewPdf: boolean;
  alert: IPayloadSetAlert;
}

// Init state.
export const initialState: IAppState = {
  app_isLoading: false,
  app_showDrawerPreviewPdf: true,
  alert: {
    show: false,
    messages: null,
    severity: undefined,
    variant: "filled",
  },
};

// App state reducer.
const appReducer: Reducer<IAppState, AppActions> = (
  state: IAppState = initialState,
  { type, payload }: AppActions
): IAppState => {
  switch (type) {
    case Types.app_SET_LOADING:
      return {
        ...state,
        app_isLoading: payload,
      };
    case Types.app_SET_ALERT:
      return {
        ...state,
        alert: {
          show: payload.show,
          messages: payload.messages ?? "",
          severity: payload.severity ?? "success",
          variant: payload.variant ?? "filled",
        },
      };

    case Types.app_RESET_ALERT:
      return {
        ...state,
        alert: initialState.alert,
      };
    default:
      return state;
  }
};

export { appReducer };
