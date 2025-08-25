import {Component} from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Products from "./components/products/products.jsx";
import ProductContext from "../context/products.jsx";


class App extends Component {


    constructor(props) {
        super();
        // console.log('App - constructor')

        //برای مقدار دهی اولیه استیت
        // this.state.product = props.products;
    }

    state = {
        products : [
            {id: 1, productNmae: 'laptop', count: 5},
            {id: 2, productNmae: 'pc', count: 2},
            {id: 3, productNmae: 'airpods', count: 3},
        ]
    }

    // componentDidMount() {
    //     console.log('App - didMount')
    // }

    // componentDidUpdate() {
    //
    //     console.log('App - didUpdate')
    // }
    render() {

        // console.log('App - render')


        return (
            <>

                <ProductContext.Provider

                    value={{
                        products: this.state.products,
                        reset: this.reset,
                        increase: this.increase,
                        decrease: this.decrease,
                        deleteProduct: this.deleteProduct
                    }}

                >

                    <Navbar/>
                    <Products/>

                </ProductContext.Provider>
            </>
        )

    }


    reset = () =>{

        const newP = this.state.products
            .map(p => {
            p.count = 0;
            return p;
        })
        this.setState({products : newP})

    }

    increase = (id) =>{
        const newP = this.state.products
            .map(p => {
            if (p.id === id) {
                p.count++
            }
            return p
        })
        this.setState({products : newP})
    }

    decrease = (id) =>{
        const newP = this.state.products
            .map(p => {
            if (p.id === id && p.count > 0) {
                p.count--
            }
            return p
        })
        this.setState({products : newP})
    }

    deleteProduct = (id) =>{
        const newP = this.state.products
            .map(p => p.id !== id ? p : null)
            .filter(p => p !== null)
        this.setState({products : newP})
    }


}

export default App;