import {useState} from "react";
import Product from "./product.jsx";
import './products.css';




const Products = () =>{
    const [products, setProducts] = useState(
        [
            {id : 1,productNmae : 'laptop' , count : 5 },
            {id : 2,productNmae : 'pc' , count : 2 },
            {id : 3,productNmae : 'airpods' , count : 3 },
        ]
    )


    return (

        <div className='page__container'>
            <div onClick={()=> reset()} className='bg-amber-400 p-2 rounded max-w-20 text-center mb-2'>reset</div>
            <div className='products '>
                {products.map(p=> (

                        <Product
                            key={p.id}
                            id={p.id}
                            productNmae={p.productNmae}
                            count={p.count}
                            increase={increase}
                            decrease={decrease}
                        />


                ))}
            </div>
        </div>

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


}


export default Products;