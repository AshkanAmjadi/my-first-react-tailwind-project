


const Product =  (props) => {


    return (
        <>

            <div className='product'>

                <h2 className='font-bold'>{props.productNmae}</h2>

                <div className='flex gap-2 mt-2'>
                    <span onClick={()=>{props.decrease(props.id)}} className='py-1 px-4 rounded bg-rose-600'>-</span>
                    <span className='py-1 px-4 rounded bg-amber-400'>{props.count}</span>
                    <span onClick={()=>{props.increase(props.id)}} className='py-1 px-4 rounded bg-green-500'>+</span>
                    <span onClick={()=>{props.deleteProduct(props.id)}} className='py-1 px-4 rounded bg-rose-600'>delete</span>
                </div>

            </div>

        </>
    )


}

export default Product