import { useState } from "react";
import "./App.css";
import List from "./components/List"

// Using a ? after defining a property in an interface signifies that the property is optional
interface IState {
  people: {
    name: string,
    age: number,
    url: string, 
    note?: string
  }[]
}
function App() {

  // IState is passed in as the interface that defines the types for each property from ["people"] passed into useState. An empty array has to be defined in the interface, it cannot just be defined in the useState as is the case with regular JSX.
  
  const [people, setPeople] = useState<IState["people"]>([])
//   const [people, setPeople] = useState([{
//     name: "Ayrton Senna",
//     age: 34,
//     url: "https://www.ayrtonsenna.com.br",
//     note: "One of the greatest Formula 1 Drivers of all-time"

//   },
//   { 
//     name: "Michael Schumacher",
//     age: 53,
//     url: "https://michael-schumacher.de/en/",

//   }
// ])

// If you type people. , it shows the defined types that can be mapped. If the type is undefined previously, it will throw an error 

people.map(person => {
  person.name
})
	return (
		<div className="app">
			<h1>Hall of Fame</h1>
      <List people={people}/>
		</div>
	);
}

export default App;
