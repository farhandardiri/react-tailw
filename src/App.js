import './App.css';
import BtnInfo from './btn/BtnInfo';

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
        <button className="bg-green-500 hover:bg-green-700 text-white transition duration-150 cursor-pointer py-2 px-8 ml-2 mt-2 rounded">Another Cool Buttons</button>
    </div>
  )
}

export default App;
