import './App.css'
import Products from "./components/products/products.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import {useState} from "react";
import ProductContext from "./context/products.jsx";


function App() {


    const [products, setProducts] = useState(
        [
            {id : 1,productNmae : 'laptop' , count : 5 },
            {id : 2,productNmae : 'pc' , count : 2 },
            {id : 3,productNmae : 'airpods' , count : 3 },
        ]
    )

    return (
        <>
            <ProductContext.Provider

                value={{
                    products: products,
                    reset: reset,
                    increase: increase,
                    decrease: decrease,
                    deleteProduct: deleteProduct
                }}

            >

                <Navbar/>
                <Products/>

            </ProductContext.Provider>
        </>
    )
    
    function reset(){

        const newP = products.map(p=>{
            p.count = 0;
            return p;
        })
        setProducts(newP)

    }
    function increase(id) {
        const newP = products.map(p=>{
            if (p.id === id){
                p.count++
            }
            return p
        })
        setProducts(newP)
    }

    function decrease(id) {
        const newP = products.map(p=>{
            if (p.id === id && p.count > 0){
                p.count--
            }
            return p
        })
        setProducts(newP)
    }

    function deleteProduct(id) {
        const newP = products
            .map(p=> p.id !== id ? p : null )
            .filter(p => p !== null)
        setProducts(newP)
    }


}

export default App
