import { useContext } from "react";
import * as Page from "./pages/index";
import * as Configs from "./configs/index";

function App() {
  const [state] = useContext(Configs.UserContext);

  return <>{state.isLogin ? <Configs.RouterDashboard /> : <Page.Login />}</>;
  // return <Configs.RouterDashboard />;
}

export default App;
