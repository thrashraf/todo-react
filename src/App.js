import { useState, useEffect } from "react";
import axios from "axios";
import { Nav } from "./Components/Nav/Nav";
import { Input } from "./Components/Input/Input";
import { Lists } from "./Components/Lists/Lists";
import { Control } from "./Components/Control/Control";




function App() {

  const [dark, setDarkTheme] = useState(false);
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState('All');


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

  useEffect(() => {
      const rootEl = document.getElementById('root')
      return dark ? rootEl.classList.add('dark') : rootEl.classList.remove('dark');

  }, [dark])


  return (
    
    <div className="w-full h-screen dark:bg-gray-900 transition-colors duration-300 ease-out">
   
      <section className="tablet:m-auto  bg-no-repeat bg-cover h-52 w-full bg-desktop-light dark:bg-desktop-dark py-10 px-10">
        <header className=" max-w-lg m-auto">
            <Nav theme={dark} setTheme={setDarkTheme}/>
            <Input data={data} setData={setData}/>
        </header>

        <main className="max-w-lg m-auto ">
          <Lists data={data} setData={setData} filter={filter} />
        </main>

        <footer className="max-w-lg m-auto">
          <Control setFilter={setFilter} filter={filter}/>
        </footer>
      </section>
  
    </div>

  );
}

export default App;
