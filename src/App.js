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
         <div className="col-span-2 row-span-2">
            <CardTable/>
         </div>
         <div className="col-span-1 row-span-1">
            <CardTable/>
         </div>
         <div className="col-span-1 row-span-1">
            <CardTable/>
         </div>
         <div className="col-span-1 row-span-1">
            <CardTable/>
         </div>
         <div className="col-span-1 row-span-1">
           <CardTable/>
         </div>
       </div>
    </div>
  )
}

function CardTable(){
  return(
   <div className="bg-blue-100 rounded p-4 border-2 border-blue-800">
                Some misterious card

       <img src="https://picsum.photos/300/200" className="w-full" alt="random"/>
         <div className="mt-4">
            <BtnInfo/>
          </div>
    </div>
  )
}

export default App;
