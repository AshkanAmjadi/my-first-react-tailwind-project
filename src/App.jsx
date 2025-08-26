import './App.css'
import Products from "./components/products/products.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import { Routes, Route} from "react-router";
import Users from "./components/users/users.jsx";
import ShowUser from "./components/users/show-user.jsx";


function App() {

    //mount and update
    // useEffect(()=>{
    //
    //     console.log('App - mount or update')
    //
    // })

    //mount only
    // useEffect(()=>{
    //
    //     console.log('App - mount only')
    //
    // },[])


    return (
        <>
            <Navbar/>
            <Routes>


                <Route path="/user/:id" element={<ShowUser />}></Route>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/" element={<h1>home</h1>}></Route>

            </Routes>


        </>
    )


}

export default App
