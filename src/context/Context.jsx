import { createContext, useState , useEffect } from "react";


const User = createContext();

 function UserProvider({children}) {
    const [products , setProducts] = useState([]);
    const [isUser, setIsUser] = useState(false);
    const [cart, setCart] = useState([]);
    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const ans = await res.json();
        
        setProducts(ans.products);
    }
    useEffect(() => {
        fetchProducts();
    } , [])

    const fetchLoginDetails = async (username , password) => {
        const res = await fetch('https://dummyjson.com/auth/login' , {
            method: 'POST',
            body : JSON.stringify({username , password}),
            headers : {'Content-Type' : 'application/json'}
        })

        const response = await res.json();
        
        if(response.message) {
            return false;
        }
        localStorage.setItem('token' , response.token);
        return true; 
    }
    const sortByAscending = () => {
        const sortedProducts = [...products].sort((a,b) => a.price - b.price);
        setProducts(sortedProducts);
        
    }
    const sortByDescending = () => {
        const sortedProducts = [...products].sort((a,b) => b.price - a.price);  
        setProducts(sortedProducts);
    }
    const handleSearch = async (name) => {
        if(name === '' || name === undefined)  {
            fetchProducts();
            return;
        }
        const res = await fetch(`https://dummyjson.com/products/search?q=${name}`);
        const ans = await res.json();
       
        setProducts(ans.products);
    }
    return (
        <User.Provider value = {{  fetchProducts    , fetchLoginDetails , products , isUser , setIsUser , handleSearch , sortByAscending , sortByDescending
           , cart , setCart
        }}>
            {children}
        </User.Provider>
    )
}


export {User , UserProvider};