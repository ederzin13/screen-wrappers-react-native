import Login from "./components/Login";
import FullScreen from "./components/screen-wrappers/FullScreen";
import Button from "./components/Button";
import Scrollable from "./components/screen-wrappers/Scrollable";

export default function App() {
  // return (
  //   <FullScreen center={true} gap={20}>
  //     <Login></Login>
  //     <Button text="Fazer login" buttonColor="green"></Button>
  //   </FullScreen>
  // );

  return (
    <Scrollable>
      <Button text="Bobers"></Button>
    </Scrollable>
  );
}
