import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContinar from "./components/HooksCakeContinar";
import IcecreamContainer from "./components/IcecreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
        <HooksCakeContinar />
        <IcecreamContainer />
        <NewCakeContainer />
        <UserContainer />
      </Provider>
    </>
  );
}

export default App;
