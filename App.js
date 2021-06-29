import LoginForm from "./components/LoginForm";
import qrOkut from "./components/qrOkut";
import servis from "./components/servis";
import Articles from "./components/Articles";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import Loading from "./components/Loading";


const SwitchNavigator=createSwitchNavigator(
  {
    LoginForm:LoginForm,
    qrOkut:qrOkut,
    servis:servis,
    Articles:Articles,
    Loading:Loading
  },
  {
    initialRouteName:'Loading',
    headerMode:'none'
  }
)
const App=createAppContainer(SwitchNavigator);
export default App