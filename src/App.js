import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {

  const responce =[
    {
      itemName : "Nirma",
      itemDate : "24",
      itemMonth : "June",
      itemYear : "1998"
    },
    {
      itemName : "Nirma2",
      itemDate : "202",
      itemMonth : "June2",
      itemYear : "19982"
    },
    {
      itemName : "Nirma3",
      itemDate : "203",
      itemMonth : "June3",
      itemYear : "19983"
    } 
  ];
  return (
    <Card>
      
      <Item name={responce[0].itemName}>
        I am the first child
      </Item>
      <ItemDate day={responce[0].itemDate} month={responce[0].itemMonth} year={responce[0].itemYear}></ItemDate>

      <Item name={responce[1].itemName}></Item>
      <ItemDate day={responce[1].itemDate} month={responce[1].itemMonth} year={responce[1].itemYear}></ItemDate>

      <Item name={responce[2].itemName}></Item>
      <ItemDate day={responce[2].itemDate} month={responce[2].itemMonth} year={responce[2].itemYear}></ItemDate>
      <div className='App'>Hello World</div>
    
    </Card>
    
    
  );
}

export default App;
