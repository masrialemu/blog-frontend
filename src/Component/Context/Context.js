import {createContext,useEffect,useReducer, useState} from 'react'
import { Reducer } from './Dispach'
import axios from 'axios'
const INIT={
    user:null,
    loading:false,
    error:false
}

export const Context=createContext()

export const ContextProvider=({children})=>{
    const [currentPage, setCurrentPage] = useState(0);
    const [num,setNum]=useState([])
    const [load,setLoad]=useState(false)
    const [data,setData]=useState([])
    const [user,setUser]=useState(null)
    const [logout,setLogout]=useState([])
    useEffect(()=>{
        const Fetch =async()=>{
        setLoad(true)
        const res= await axios.get('http://localhost:5000/getpost')
        setData(res.data)
        if(res.data){
        setLoad(false)
       }    
    }
        Fetch()
        
      },[])
      useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      }, []);
      const myData = localStorage.getItem('user');
      const parsedData = JSON.parse(myData);
      console.log(parsedData);
    const Logout=()=>{
        setUser(null)
         localStorage.removeItem('user');
    }
    const itemsPerPage = 6;
    const handlePageChange = (selected) => {
        setCurrentPage(selected.selected);
      };
      const pageCount = Math.ceil(data.length / itemsPerPage);

      const startIndex = currentPage * itemsPerPage;
    
      const endIndex = startIndex + itemsPerPage;
    
      const currentPageData = data.slice(startIndex, endIndex);
    
    // const [state,dispach]= useReducer(Reducer,INIT)
    return (    <Context.Provider 
        value={{
            user,Logout,setUser,data,load,
            handlePageChange,pageCount,currentPageData,
            parsedData
        }}>
        {
            children
        }
        </Context.Provider>)
}