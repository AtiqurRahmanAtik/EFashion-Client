import { useDispatch, useSelector } from "react-redux";
import { deleteBook, upDateBooks } from "../Features/BookSlice";




const About = () => {

        const book = useSelector((state)=> state. booksR.books);
        // console.log(book);

        const dispatch = useDispatch();


        const handleDelete = (id)=>{

            console.log('delete Book : ',id);
            dispatch(deleteBook(id));
          

        }

        // update data 
        const handleUpdate = (id) =>{
            console.log(id);

            // dispatch(upDateBooks(id))
        }



    return (

        <div>
            <h1 className="text-center font-bold text-2xl my-7 capitalize text-red-600"> this is about components  : {book?.length}</h1>
            
            <div className='text-center font-bold text-3xl'></div>

            
               {/* increment , decrement , reset */}
      {/* <div className='text-center my-5'>

      <button onClick={()=> dispatch(increment())} className='btn bg-amber-400'>Increment</button>

      <button onClick={()=> dispatch(decrement())}  className='btn bg-blue-400' > Decrement</button>

      <button onClick={()=> dispatch(reset())}  className='btn bg-blue-400' > Reset</button>


        <button onClick={()=> dispatch(multipy(5))} className='btn bg-fuchsia-400 '> Multipy </button>
     
            </div> */}



            <div className="">
              
                    {
                        book?.map(book=> <ul  key={book.id}>
                            <div className="bg-gray-300 border py-5 m-4 text-center">
                            <li>{book.title}</li> 
                            {/* <li>{book.tags[1]}</li>  */}

                           <li> <button className="btn bg-green-500 border-none text-2xl my-2" onClick={()=>handleDelete(book.id) }> Delete</button></li>

                           <li> <button className="btn bg-green-500 border-none text-2xl my-2" onClick={()=> handleUpdate(book.id)}> Update</button></li>
                            </div>
                        </ul>)
                    }
               
            </div>

            
        </div>
    );
};

export default About;