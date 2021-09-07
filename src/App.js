import './App.css';
import BtnInfo from './btn/BtnInfo';
import BtnSuccess from './btn/BtnSuccess';

function App() {
  return (
  <div className="text-center sm:text-left">
    <Btn/>
  </div>
  );
}

function Btn(){
  return(
      <div className="container mx-auto mt-12">
        <h1 className="text-2xl text-blue-700 font-bold mb-3">Awesome Button</h1>
        <BtnInfo/>
        <BtnSuccess/>
    </div>
  )
}

export default App;
