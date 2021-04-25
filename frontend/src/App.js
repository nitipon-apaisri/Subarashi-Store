import axios from "axios";

const getIngredients = () => {
   axios.get("http://localhost:4200/ingredients").then((res) => {
      console.log(res);
   });
};

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <button onClick={getIngredients}>Fetch</button>
         </header>
      </div>
   );
}

export default App;
