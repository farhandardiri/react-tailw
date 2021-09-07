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
        <TableItem/>
    </div>
  )
}

function TableItem(){
  return(
    <div className="container mx-auto mt-12">
       <h1 className="text-2xl text-blue-700 font-bold mb-3">Mysterious Card</h1>
       <div className="grid grid-cols-4 grid-rows-2 gap-4">
         <div className="col-span-2 row-span-2 bg-blue-100 text-center p-4">
          Column 1
         </div>
         <div className="col-span-1 row-span-1 bg-blue-100 text-center p-4">
          Column 2
         </div>
         <div className="col-span-1 row-span-1 bg-blue-100 text-center p-4">
          Column 3
         </div>
         <div className="col-span-1 row-span-1 bg-blue-100 text-center p-4">
          Column 4
         </div>
         <div className="col-span-1 row-span-1 bg-blue-100 text-center p-4">
          Column 5
         </div>
       </div>
    </div>
  )
}

export default App;
