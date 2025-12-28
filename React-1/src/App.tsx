import Card from "./components/02-Card_fragmented";
import Card1 from "./components/01-Card";
import Card3 from "./components/03-Card_Props";
import Card4 from "./components/04-Multiple_props";
import Card5 from "./components/05-Card_children";
import Body2 from "./fragments/02-Children_Fragment";
import List from "./components/06-List";
import Card00 from "./components/00-card";
function App() {
  const list = ["Eren","Jumama",'RAta']
  return (
    <>
      <Card></Card>
      <Card1></Card1>
      <Card3 body={"Hola mundo, esto es un parametro pasado"}></Card3>
      <Card4 Title={"Esto es un titulo"} Paragraph={"Este es el texto del componente"}></Card4>
      <Card5><Body2></Body2></Card5>
      <Card00><List data={list}/></Card00>
    </>
  );
}

export default App;
