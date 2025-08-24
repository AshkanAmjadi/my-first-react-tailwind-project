import {useContext} from "react";
import ProductContext from "../../context/products.jsx";


const Product =  (props) => {

    const contextProps = useContext(ProductContext)

    return (
        <>

            <div className='product'>

                <h2 className='font-bold'>{props.productNmae}</h2>

                <div className='flex gap-2 mt-2'>
                    <span onClick={()=>{contextProps.decrease(props.id)}} className='py-1 px-4 rounded bg-rose-600'>-</span>
                    <span className='py-1 px-4 rounded bg-amber-400'>{props.count}</span>
                    <span onClick={()=>{contextProps.increase(props.id)}} className='py-1 px-4 rounded bg-green-500'>+</span>
                    <span onClick={()=>{contextProps.deleteProduct(props.id)}} className='py-1 px-4 rounded bg-rose-600'>delete</span>
                </div>

            </div>

        </>
    )


}

export default Product