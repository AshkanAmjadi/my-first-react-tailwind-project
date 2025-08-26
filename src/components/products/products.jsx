import Product from "./product.jsx";
import './products.css';
import { useState} from "react";
import ProductContext from "../../context/products.jsx";


const Products = () => {



    const [products, setProducts] = useState(
        [
            {id: 1, productNmae: 'laptop', count: 5},
            {id: 2, productNmae: 'pc', count: 2},
            {id: 3, productNmae: 'airpods', count: 3},
        ]
    )

    return (

        <ProductContext.Provider

            value={{
                products: products,
                reset: reset,
                increase: increase,
                decrease: decrease,
                deleteProduct: deleteProduct
            }}

        >
            <div className='page__container'>
                <div onClick={() => reset()}
                     className='bg-amber-400 p-2 rounded max-w-20 text-center mb-2'>reset
                </div>
                <div className='products '>
                    {products.map(p => (

                        <Product
                            key={p.id}
                            id={p.id}
                            productNmae={p.productNmae}
                            count={p.count}

                        />


                    ))}
                </div>
            </div>
        </ProductContext.Provider>

    )


    function reset() {

        const newP = products.map(p => {
            p.count = 0;
            return p;
        })
        setProducts(newP)

    }

    function increase(id) {
        const newP = products.map(p => {
            if (p.id === id) {
                p.count++
            }
            return p
        })
        setProducts(newP)
    }

    function decrease(id) {
        const newP = products.map(p => {
            if (p.id === id && p.count > 0) {
                p.count--
            }
            return p
        })
        setProducts(newP)
    }

    function deleteProduct(id) {
        const newP = products
            .map(p => p.id !== id ? p : null)
            .filter(p => p !== null)
        setProducts(newP)
    }

}


export default Products;