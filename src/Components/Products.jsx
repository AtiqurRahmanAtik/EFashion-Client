

const Products = ({item}) => {
    console.log(item);

    const {ProductName,BrandName,ProductImage,Description,Price,Category,Ratings,ProductCreationDateTime} = item;

  
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
  </div>
</div>
      
    );
};

export default Products;