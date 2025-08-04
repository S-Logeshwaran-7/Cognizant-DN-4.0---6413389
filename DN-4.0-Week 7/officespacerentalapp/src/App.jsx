import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import './App.css';

function App() {
  const Photo1=() => <img src={image1} width={300} height={300} />
  const Photo2=() => <img src={image2} width={300} height={300} />
  const itemName1={Name:"DBS",Rent:50000,Address:"Chennai"}
  const itemName2={Name:"RES",Rent:70000,Address:"Coimbatore"}
  return (
    <div className="App">
      <h1 style={{paddingBottom : 50}}>Office Space, at Affordable Range</h1>
      <div className='Office'>
      <div className='firstOffice'>
      <Photo1/>
      <h1>Name : {itemName1.Name} </h1>
      <h3 style={{color : itemName1.Rent<=60000?'red':'green'}}>Rent : {itemName1.Rent} </h3>
      <h3>Address : {itemName1.Address} </h3></div>
      <div className='secondOffice'>
      <Photo2/>
      <h1>Name : {itemName2.Name} </h1>
      <h3 style={{color : itemName2.Rent<=60000?'red':'green'}}>Rent : {itemName2.Rent} </h3>
      <h3>Address : {itemName2.Address} </h3>   </div> 
      </div>
    </div>
  );
}

export default App;
