
import './App.css';
import { incriment,decriment,changename,} from './Redux/compteurSlice';
import {useDispatch,useSelector} from 'react-redux';
function App() {
  const compt = useSelector((state)=>state.compteur.value)
  const name = useSelector((state)=>state.compteur.name)
  const dispatch = useDispatch();
  return (
    <div className="container">
     <h1>{name}</h1>
     <button onClick={()=>dispatch(changename())}>change name</button>
     <div><button onClick={()=>dispatch(incriment())}>incriment</button>
     <h1>{compt}</h1>
     <button onClick={()=>dispatch(decriment())}>decriment</button>
     </div>
    </div>
  );
}

export default App;
