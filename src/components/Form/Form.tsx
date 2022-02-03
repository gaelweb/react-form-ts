import { userInfo } from "os";
import { useReducer } from "react";

type State = {
  counterStep: number;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  };
};

const initialState: State = {
  counterStep: 1,
  user: {
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
  },
};

const STEPFORM = "STEPFORM";
const SENDFORM = "SENDFORM";

type ACTIONTYPE =
  | { type: typeof STEPFORM }
  | { type: typeof SENDFORM; payload: {} };

const reducer = (state = initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case STEPFORM:
      console.log({ state, action });
      return {
        ...state,
        counterStep: state.counterStep + 1,
      };
    case SENDFORM:
      console.log("user profil : ", state.user);
      state.user.id++;
      return {
        ...state,
        user: state.user,
      };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row outline outline-purple-500 rounded p-3 w-4/5 m-auto">
        {/* STEP FORM */}
        <div className="basis-1/3">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Register</li>
            <li className={`step ${state.counterStep > 1 && "step-primary"}`}>
              Purchase
            </li>
            <li className={`step ${state.counterStep > 2 && "step-primary"}`}>
              Purchase
            </li>
          </ul>
        </div>

        {/* FORM */}
        <div className="basis-2/3">
          <form id="form-step-one" className="flex flex-col">
            {/* FIRST STEP FORM */}
            <div
              className={`flex flex-col rounded ${
                state.counterStep > 1 ? "invisible" : "visible"
              }`}
            >
              {/* FIRSTNAME - LASTNAME */}
              <div className="flex flex-col md:flex-row justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Firstname</span>
                  </label>
                  <input type="text" placeholder="Jean" className="input" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Lastname</span>
                  </label>
                  <input type="text" placeholder="Dubois" className="input" />
                </div>
              </div>

              {/* EMAIL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="jean@dubois.com"
                  className="input"
                />
              </div>
            </div>

            {/* SECOND STEP FORM */}

            {/* THIRD STEP FORM */}

            {/* STEPS BTNS */}
            <button
              className={`btn btn-circle btn-md bg-purple-800 hover:bg-purple-600 mt-5 self-end ${
                state.counterStep > 2 ? "invisible" : "visible"
              }`}
              type="button"
              onClick={() => dispatch({ type: STEPFORM })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            {/* ENDING BTN FORM */}
            <button
              type="button"
              className={`btn rounded btn-md bg-purple-800 hover:bg-purple-600 self-end ${
                state.counterStep > 2 ? "visible" : "invisible"
              }`}
              onClick={() => dispatch({ type: SENDFORM, payload: {} })}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
