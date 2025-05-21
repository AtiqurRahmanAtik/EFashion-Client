
import React, { useEffect, useState } from 'react';
import Products from './Products';
import Banner from './Banner';
import { useGetProductQuery } from '../Features/ProductApi';




const Home = () => {

       // using RTK Query 
    const {data :  products =[] , isLoading, isError} =  useGetProductQuery();

    // console.log(products);


    // const [products, SetProducts] = useState([]);

    // const {product, isLoading , error} = useSelector((state)=> (state.productR))
    
    // console.log(products);

    // const dispatch = useDispatch();

    // fetch using redux 
    // useEffect(()=>{
    //     dispatch(productFetch())
    // },[dispatch])

    


      
    // fetch data using axios here
        // const fetchData = async()=>{
        //    await fetch('http://localhost:5000/api/product')
        //    .then(res=>  res.json())
        //    .then(data => SetProducts(data))
        // }

        // useEffect(()=>{
        //     fetchData();
        // },[])


    if(isLoading){
        return <>
        <h1 className='text-2xl text-center'>Loading...........</h1>
        </>
    }
      
    if(isError){
        return <>
        <h1 className='text-2xl text-center'>Loading...........</h1>
        </>
    }
      

    return (

        
        <div >

             {/* Banner Section Here */}
             <section className="my-11">

            <Banner/>
            </section>


            <h1 className="text-center font-bold text-2xl my-9 capitalize text-green-500"> this is Our latest Products </h1>

        <div className=' grid gap-5 justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products?.map(item=> <Products key={item._id} item={item}></Products>)
            }
        </div>


       

        </div>
    );
};

export default Home;