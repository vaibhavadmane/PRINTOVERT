import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Designproduct from './components/Design product/Designproduct'
import TShirtDesigner from './components/Tshirtdesigner/TShirtDesigner'
function App() {
  

  return (
    <> 
    <div className='flex'>
    <Header />
    {/* <Dashboard /> */}
    {/* <Designproduct /> */}
    <TShirtDesigner />
    </div>
    

    </>
  )
}

export default App
