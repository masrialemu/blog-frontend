import {createContext,useEffect,useReducer, useState} from 'react'
import { Reducer } from './Dispach'
import { useHistory } from 'react-router-use-history'

import axios from 'axios'
const INIT={
    user:null,
    loading:false,
    error:false
}

export const Context=createContext()

export const ContextProvider=({children})=>{
    const [currentPage, setCurrentPage] = useState(0);
    const [load,setLoad]=useState(false)
    const [data,setData]=useState([])
    const [user,setUser]=useState(null)
    const [logout,setLogout]=useState([])
    const history = useHistory()
    
  // useEffect(() => {
  //   // Retrieve user data from localStorage
  //   const storedToken = localStorage.getItem('token');
  //   const storedEmail = localStorage.getItem('email');
  //   const storedPassword = localStorage.getItem('password');
  //   const storedName = localStorage.getItem('name');
  //   const storedAdmin = localStorage.getItem('admin') === 'true';
  //   const storedProfilePicture = localStorage.getItem('profilePicture');

  //   // Set user data in state
  //   setToken(storedToken);
  //   setEmail1(storedEmail);
  //   setPassword1(storedPassword);
  //   setName(storedName);
  //   setAdmin(storedAdmin);
  //   setProfilePicture(storedProfilePicture);

    // Set up a timer to clear localStorage after 2 hours of inactivity
//     const timer = setTimeout(() => {
//       localStorage.clear();
//       setToken('');
//       setEmail1('');
//       setPassword1('');
//       setName('');
//       setAdmin(false);
//       setProfilePicture('');
//     }, 2 * 60 * 60 * 1000);
// //
//     return () => clearTimeout(timer);
//   }, []);
  // const updateUser = (userData) => {
  //   setToken(userData.token);
  //   setEmail1(userData.email);
  //   setPassword1(userData.password);
  //   setName(userData.name);
  //   setAdmin(userData.admin);
  //   setProfilePicture(userData.profilePicture);

  //   Object.entries(userData).forEach(([key, value]) => {
  //     localStorage.setItem(key, value);
  //   });
  // };

   
    useEffect(()=>{
        const Fetch =async()=>{
        setLoad(true)
        const res= await axios.get('https://blog-backend-end-m4rj.onrender.com/getpost')
        setData(res.data)
        if(res.data){
        setLoad(false)
       }    
    }
        Fetch()
        
      },[])
      // useEffect(() => {
      //   const userData = localStorage.getItem('user');
      //   if (userData) {
      //     setUser(JSON.parse(userData));
      //   }
      // }, []);
      // const myData = localStorage.getItem('user');
      // const parsedData = JSON.parse(myData);
      // console.log(parsedData);
    const Logout=()=>{
      setUser([])
      window.location.replace('/')
    //     localStorage.clear();
    // setToken('');
    // setEmail1('');
    // setPassword1('');
    // setName('');
    // setAdmin(false);
    // setProfilePicture('');
        //  localStorage.removeItem('user');
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
            
        }}>
        {
            children
        }
        </Context.Provider>)
}