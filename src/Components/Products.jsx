import { useDispatch, useSelector } from "react-redux";
import { addToCard, singleProductFetch } from "../Features/productSlice";
import { Link } from "react-router";


const Products = ({item}) => {
    // console.log(item);

    const dispatch = useDispatch();

    const {cardProduct,product,isLoading, error}  = useSelector((state)=>(state.productR));


    const {_id,ProductName,BrandName,ProductImage,Description,Price,Category,Ratings,ProductCreationDateTime} = item;

    const handleAddCard = (product)=>{
      // console.log(product)
      dispatch(addToCard(product));
    }


   

    if(isLoading){
      return <>
      <h1>Loading ............</h1>
      </>
    }
  
    return (
        
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className="w-[410px] h-[410px] p-3 rounded-3xl object-cover"
      src={ProductImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {ProductName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-center my-2">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>


    <div className="text-center">
      <button onClick={()=>handleAddCard(item)} className="btn bg-green-500 rounded-4xl text-2xl hover:bg-red-500">Add To Card</button>

     <Link to={`/product/${_id}`}>
     <button  className="btn bg-green-500 rounded-4xl text-2xl hover:bg-red-500">Details</button>
     </Link>

    </div>
  </div>
</div>
      
    );
};

export default Products;