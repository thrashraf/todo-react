import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Nav } from "./Components/Nav/Nav";
import { Input } from "./Components/Input/Input";
import { Lists } from "./Components/Lists/Lists";
import { Control } from "./Components/Control/Control";




function App() {

  const [theme, setTheme] = useState('light');
  const [data, setData] = useState(null);



  useEffect(() => {
    axios.get('https://react-hooks-1b64f-default-rtdb.firebaseio.com/todo.json')
    .then(res => {
      const todos = [];
      const data = res.data
      for (const key in data) {
          todos.push({id: key, data: data[key].name, check: data[key].check})
        }
      setData(todos)
      
    })
  }, [])



  return (
    
    <div className="bg-mobile-light bg-no-repeat bg-cover h-52 w-full laptop:bg-desktop-light py-10 px-10 bg-gray-50">
   
      <section className="max-w-lg tablet:m-auto">
        <header>
            <Nav />
            <Input data={data} setData={setData}/>
        </header>

        <main>
          <Lists data={data} setData={setData} />
        </main>

        <footer>
          <Control />
        </footer>
      </section>
  
    </div>

  );
}

export default App;
