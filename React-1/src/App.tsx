import Card from "./components/02-Card_fragmented";
import Card1 from "./components/01-Card";
import Card3 from "./components/03-Card_Props";
import Card4 from "./components/04-Multiple_props";
import Card5 from "./components/05-Card_children";
import Body2 from "./fragments/02-Children_Fragment";
import List from "./components/06-List";
import Card00 from "./components/00-card";
import List2 from "./components/07-PropsFunctions";
function App() {
  const list = ["Eren","Jumama",'RAta']
  const handleSelect =(element:string)=>{
    alert(`Elegiste a ${element}`)
  }
  //Renderizado condicional
  const content = list.length? <List2 data={list} onSelect={handleSelect}/> : "Sin elementos para mostrar";
  return (
    <>
      <Card></Card>
      <Card1></Card1>
      <Card3 body={"Hola mundo, esto es un parametro pasado"}></Card3>
      <Card4 Title={"Esto es un titulo"} Paragraph={"Este es el texto del componente"}></Card4>
      <Card5><Body2></Body2></Card5>
      <Card00><List data={list}/></Card00>
      <Card00><List2 data={list} onSelect={handleSelect}/></Card00>
      <Card00>
        {""&&"String Vacio"}
        {null&&"Null"}
        {false&&"false"}
        {undefined&&"Indefinido"}
        {0&&"0"}
      </Card00>
      <Card00>
        {content}
      </Card00>
    </>
  );
}

export default App;
