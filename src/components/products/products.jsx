
import Product from "./product.jsx";
import './products.css';




const Products = (props) =>{



    return (

        <div className='page__container'>
            <div onClick={()=> props.reset()} className='bg-amber-400 p-2 rounded max-w-20 text-center mb-2'>reset</div>
            <div className='products '>
                {props.products.map(p=> (

                        <Product
                            key={p.id}
                            id={p.id}
                            productNmae={p.productNmae}
                            count={p.count}
                            increase={props.increase}
                            decrease={props.decrease}
                            deleteProduct={props.deleteProduct}
                        />


                ))}
            </div>
        </div>

    )

}


export default Products;