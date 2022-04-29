const SIDEBAR = "Sidebar//SIDEBAR";

const initialState = {
  id: null as null | number,
  userId: null as null | number,
  completed: false,
  title: "",
};

type InitialStateType = typeof initialState;

const SidebarReduser = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case SIDEBAR:
      return {
        ...state,
        id: action.id,
        userId: action.userId,
        completed: action.completed,
        title: action.title,
      };
    default:
      return state;
  }
};

type ActionType = SidebarActionType;

export default SidebarReduser;

export type SidebarActionType = {
  type: typeof SIDEBAR;
  id: number;
  userId: number;
  completed: boolean;
  title: string;
};
export const SidebarCreater = (
  id: number,
  userId: number,
  completed: boolean,
  title: string
): SidebarActionType => ({
  type: SIDEBAR,
  id,
  userId,
  completed,
  title,
});

// const maps = usersAPI.follow()
//     // .then(response => response.json())
//     .then(json => {
//         // dispa
//     })

// const User = async (dispatch: SidebarActionType, userId: number, apiMethod: any, actionCreator: (userId: number) => ) => {
//     dispatch(followInProgressAC(true, userId))
//     let data = await apiMethod(userId)
//     if (data.resultCode === ResultCodesType.Success) {
//         dispatch(actionCreator(userId))
//     }
//     dispatch(followInProgressAC(false, userId))
// }
