import './App.css';
import {comicdata} from './Reduxfile/Actions/action'
import  { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state?.apidata)
  console.log(selector);
  const {loading,resdata} = selector;
  console.log("selector",selector);
  useEffect(()=>{
    dispatch(comicdata())
  },[dispatch])
  return (
    <div className="App">

      {
        loading?"...loading":resdata?.length

      }
     
    </div>
  );
}

export default App;
