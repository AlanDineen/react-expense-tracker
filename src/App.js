
import Expenses from "./components/Expenses";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 765.98,
      date: new Date(2022, 3, 30)
    },
    {
      id: 'e2',
      title: 'Car Insurance2',
      amount: 265.98,
      date: new Date(2022, 2, 13)
    },
    {
      id: 'e3',
      title: 'Car Insurance3',
      amount: 565.98,
      date: new Date(2022, 4, 26)
    },
    {
      id: 'e4',
      title: 'Car Insurance4',
      amount: 665.98,
      date: new Date(2022, 6, 26)
    }
  ]

  return (
    <div>
      
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
