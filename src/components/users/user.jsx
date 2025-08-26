import {Link} from "react-router";


const User = (props) => {




    return (
        <div key={props.id} className='user'>
            <img className='w-20 rounded-full' src={props.image}/>
            <h2 className='font-bold text-xl'>{props.firstName}</h2>
            <h2 className='font-semibold text-lg'>{props.email}</h2>

            <div className='flex flex-wrap gap-2 mt-6'>

                <button className='bg-amber-500 font-bold p-2 rounded max-w-20 text-center mb-2'
                        onClick={() => {
                            props.updateUser(props.id)
                        }}>
                    update
                </button>
                <button className='bg-rose-500 font-bold p-2 rounded max-w-20 text-center mb-2'
                        onClick={() => {
                            props.deleteUser(props.id)
                        }}>
                    delete
                </button>
                <Link className='bg-blue-500 font-bold p-2 rounded max-w-20 text-center mb-2 text-white' to={ '/user/' + props.id }>
                    show
                </Link>
            </div>
        </div>
    )







}

export default User