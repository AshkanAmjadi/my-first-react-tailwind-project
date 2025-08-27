import './App.css'
import Products from "./components/products/products.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import {Routes, Route, Navigate} from "react-router";
import Users from "./components/users/users.jsx";
import ShowUser from "./components/users/show-user.jsx";
import Login from "./components/auth/login.jsx";
import {use, useEffect, useState} from "react";
import AuthContext from "./components/auth/AuthContext.jsx";
import getCurrentUser from "./helper/authentication.js";
import Dashboard from "./components/auth/Dashboard.jsx";


function App() {

    const [currentUser, setCurrentUser] = useState(false)


    // mount only
    useEffect(()=>{

        getUser();

    },[])

    async function getUser() {
        const user = await getCurrentUser();
        console.log(user)
        setCurrentUser(user)
    }

    return (
        <>

            <AuthContext.Provider value={
                {currentUser,setCurrentUser}
            } >

                <Navbar/>
                <Routes>


                    <Route path="/user/:id" element={<ShowUser />}></Route>
                    <Route path="/users" element={<Users/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/login"  element={currentUser ? <Navigate to="/dashboard" />  : <Login />}></Route>
                    <Route path="/dashboard" element={ currentUser ? <Dashboard /> : <Navigate to="/login" /> }></Route>
                    <Route path="/" element={<h1>home</h1>}></Route>

                </Routes>

            </AuthContext.Provider>


        </>
    )


}

export default App
