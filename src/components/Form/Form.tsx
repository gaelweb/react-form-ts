import { useReducer } from "react";
import "./Form.css";

/* TYPE USER */
type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthday: Date;
  city: string;
  postalCode: number;
  address: string;
  phoneNumber: number;
  supInfos: string;
};

/* STATE */
type State = {
  counterStep: number;
  user: User;
  isSend: boolean;
};

/* INITIAL TYPE */
const initialState: State = {
  counterStep: 1,
  user: {
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    birthday: new Date(),
    city: "",
    postalCode: 0,
    address: "",
    phoneNumber: 0,
    supInfos: "",
  },
  isSend: false,
};

/* GLOBAL CONST */
const STEPFORM = "STEPFORM";
const FIRSTNAME = "FIRSTNAME";
const LASTNAME = "LASTNAME";
const EMAIL = "EMAIL";
const BIRTHDAY = "BIRTHDAY";
const CITY = "CITY";
const POSTALCODE = "POSTALCODE";
const ADDRESS = "ADDRESS";
const PHONENUMBER = "PHONENUMBER";
const SUPINFOS = "SUPINFOS";
const SENDFORM = "SENDFORM";

/* ACTION TYPE */
type ACTIONTYPE =
  | { type: typeof STEPFORM }
  | { type: typeof FIRSTNAME; payload: { firstname: string } }
  | { type: typeof LASTNAME; payload: { lastname: string } }
  | { type: typeof EMAIL; payload: { email: string } }
  | { type: typeof BIRTHDAY; payload: { birthday: Date } }
  | { type: typeof CITY; payload: { city: string } }
  | { type: typeof POSTALCODE; payload: { postalCode: number } }
  | { type: typeof ADDRESS; payload: { address: string } }
  | { type: typeof PHONENUMBER; payload: { phoneNumber: number } }
  | { type: typeof SUPINFOS; payload: { supInfos: string } }
  | { type: typeof SENDFORM; payload: {} };

/* REDUCER */
const reducer = (state = initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case STEPFORM:
      return {
        ...state,
        counterStep: state.counterStep + 1,
      };
    case FIRSTNAME:
      state.user.firstname = action.payload.firstname;
      return {
        ...state,
      };
    case LASTNAME:
      state.user.lastname = action.payload.lastname;
      return {
        ...state,
      };
    case EMAIL:
      state.user.email = action.payload.email;
      return {
        ...state,
      };
    case BIRTHDAY:
      state.user.birthday = action.payload.birthday;
      return {
        ...state,
      };
    case CITY:
      state.user.city = action.payload.city;
      return {
        ...state,
      };
    case POSTALCODE:
      state.user.postalCode = action.payload.postalCode;
      return {
        ...state,
      };
    case ADDRESS:
      state.user.address = action.payload.address;
      return {
        ...state,
      };
    case PHONENUMBER:
      state.user.phoneNumber = action.payload.phoneNumber;
      return {
        ...state,
      };
    case SUPINFOS:
      state.user.supInfos = action.payload.supInfos;
      return {
        ...state,
      };
    case SENDFORM:
      state.user.id++;
      state.isSend = true;
      return {
        ...state,
        isSend: state.isSend,
        user: state.user,
      };
    default:
      throw new Error("checkout an error in form !");
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div
        className={`flex-col md:flex-row outline outline-purple-500 rounded p-3 w-4/5 m-auto ${
          state.isSend ? "hidden" : "flex"
        }`}
      >
        {/* STEP FORM */}
        <div className="basis-1/3">
          <ul className="steps steps-vertical">
            <li className="step step-primary">Identité</li>
            <li className={`step ${state.counterStep > 1 && "step-primary"}`}>
              Lieu de résidence
            </li>
            <li className={`step ${state.counterStep > 2 && "step-primary"}`}>
              Informations complémentaire
            </li>
          </ul>
        </div>

        {/* FORM */}
        <div className="basis-2/3">
          <form id="form-step-one" className="flex flex-col">
            {/* FIRST STEP FORM */}
            <div
              className={`flex-col rounded ${
                state.counterStep > 1 ? "hidden" : "flex"
              }`}
            >
              {/* FIRSTNAME - LASTNAME */}
              <div className="flex flex-col md:flex-row justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Firstname</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Jean"
                    className="input"
                    value={state.user.firstname}
                    onChange={(e) =>
                      dispatch({
                        type: FIRSTNAME,
                        payload: { firstname: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Lastname</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Dubois"
                    className="input"
                    value={state.user.lastname}
                    onChange={(e) =>
                      dispatch({
                        type: LASTNAME,
                        payload: { lastname: e.target.value },
                      })
                    }
                  />
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
              {/* BIRTHDAY DATE */}
              <div className="form-control">
                <label htmlFor="birthdate" className="label">
                  <span className="label-text">Année de naissance</span>
                </label>
                <input type="date" name="birthdate" className="input" />
              </div>
            </div>

            {/* SECOND STEP FORM */}
            <div
              className={`flex-col rounded ${
                state.counterStep === 2 ? "flex" : "hidden"
              }`}
            >
              {/* ADDRESS */}
              <div className="form-control">
                <label htmlFor="address" className="label">
                  <span className="label-text">Adresse</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="input"
                  placeholder="1 rue des lilas"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                {/* POSTAL CODE */}
                <div className="form-control">
                  <label htmlFor="postalCode" className="label">
                    <span className="label-text">Code postal</span>
                  </label>
                  <input
                    name="postalCode"
                    type="number"
                    placeholder="35000"
                    className="input"
                  />
                </div>
                {/* CITY */}
                <div className="form-control">
                  <label htmlFor="city" className="label">
                    <span className="label-text">Ville</span>
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="Rennes"
                    className="input"
                  />
                </div>
                {/* PHONE NUMBER */}
                <div className="form-control">
                  <label htmlFor="phoneNumber" className="label">
                    <span className="label-text">Téléphone</span>
                  </label>
                  <input
                    name="phoneNumber"
                    type="number"
                    placeholder="01 10 20 30 40"
                    className="input"
                  />
                </div>
              </div>
            </div>

            {/* THIRD STEP FORM */}
            <div
              className={`flex-col rounded 
              ${state.counterStep === 3 ? "flex" : "hidden"}`}
            >
              <div className="form-control">
                <label htmlFor="informations" className="label">
                  <span className="label-text">
                    Informations complémentaires
                  </span>
                </label>
                <textarea
                  name="informations"
                  className="textarea h-24"
                  placeholder="lorem ipsum ..."
                ></textarea>
              </div>
            </div>

            {/* STEPS BTNS */}
            <button
              className={`btn btn-circle btn-md bg-purple-800 hover:bg-purple-600 mt-5 self-end ${
                state.counterStep > 2 ? "hidden" : "block"
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
              className={`btn rounded btn-md bg-purple-800 hover:bg-purple-600 mt-5 self-end ${
                state.counterStep > 2 ? "block" : "hidden"
              }`}
              onClick={() => dispatch({ type: SENDFORM, payload: {} })}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      {/* RENDERING PROFIL */}
      <div
        className={`flex-col md:flex-row outline outline-purple-900 rounded p-3 w-4/5 m-auto profil-user-list ${
          state.isSend ? "flex" : "hidden"
        }`}
      >
        <div className="flex">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16">
              <span>MX</span>
            </div>
          </div>
          <p>Prénom : {state.user.firstname}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
