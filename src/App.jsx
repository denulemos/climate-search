import ClimateApp from "./components/ClimateApp"
import {ClimateProvider} from './context/ClimateProvider';
function App() {

  return (
    <ClimateProvider>
      <header>
        <h1>Climate Search</h1>
      </header>
     <ClimateApp/>
    </ClimateProvider>

  )
}

export default App
