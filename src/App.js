import React from 'react';
import './css/App.css';
import './css/bootstrap.min.css';

function App() {

   const [time,setTime] = React.useState(new Date().toLocaleTimeString())
   React.useEffect(() => {
     setInterval(()=>{
       setTime(new Date().toLocaleTimeString())
     },1000)
   })

   return (
     <div className="bg-light " style={{"maxWidth": "60rem"}}>
       <div className="card-body">
         <h1> It is {time}</h1>
       </div>
     </div>
   );
}

export default App;
