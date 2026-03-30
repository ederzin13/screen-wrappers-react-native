import Login from "./components/Login";
import FullScreen from "./components/screen-wrappers/FullScreen";
import Button from "./components/Button";
import Scrollable from "./components/screen-wrappers/Scrollable";
import Card from "./components/Card";
import Title from "./components/Title";

export default function App() {
  // return (
  //   <FullScreen center gap={50}>
  //     <Login></Login>
  //     <Button text="Fazer login" buttonColor="green"></Button>
  //   </FullScreen>
  // );

  const handleLog = async () => {
    console.log("Fetching...");
  };

  return (
    <Scrollable center={true} gap={30} onRefresh={handleLog}>
      <Title
        title="Best company employees"
        description="Most hard working employee from each department"
      ></Title>
      <Card
        departmentIcon="color-palette-outline"
        employeeName="Leonardo Da Vinci"
      ></Card>
      <Card departmentIcon="build-outline" employeeName="John John"></Card>
      <Card departmentIcon="ear-outline" employeeName="Eze 'oreia'"></Card>
      <Card
        departmentIcon="megaphone-outline"
        employeeName="Carlota de Paula"
      ></Card>
      <Card
        departmentIcon="business-outline"
        employeeName="Emmeline Lagoon"
      ></Card>
    </Scrollable>
  );
}
