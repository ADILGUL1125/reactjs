import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios';


const Fetchdata = () => {
    let [products,setproducts]=useState([])
    
    let fetchuser= async()=>{
        try {
            let data= await axios.get('https://dummyjson.com/products')
            console.log(data.data.products)
            setproducts(data.data.products)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchuser()
    },[])
     useEffect(() => {
    console.log("Updated products:", products)
  }, [products])
  return (
    <div>
        <div className='maincard'>{products.map((items)=>(
            <div key={items.id} className='card' >
                <img src={items.thumbnail} alt={items.title} style={{width:'200px'}} />
                <h2   style={{fontSize:'15px'}}>{items.title}</h2>  
                <h2   style={{fontSize:'15px'}}> price :{  items.price} $</h2>  
                <h2   style={{fontSize:'15px'}}> avaliablety :{  items.availabilityStatus}</h2>  

            </div>
        ))}</div>
    </div>
  )
}

export default Fetchdata