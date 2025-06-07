import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const BookContainer = () => {
   const nob =  useSelector((state)=>state.noOfBooks);
   const dispatch =useDispatch();
   const [bookCount, setBookCount] = useState(1);
   const [addBook,setAddBook ] = useState(1);
  return (
    <div>
     <p> {nob}</p>
     <input type="number" name="" id="" onChange={(e)=>setBookCount(e.target.value)} />
        <input type="number" name="" id="" onChange={(e)=>setAddBook(e.target.value)} />
     <button onClick={()=>dispatch({type:"Buy_book",payload:bookCount})}>Buy Book</button>
     <button onClick={()=>dispatch({type:"add_book",payload:addBook})}>Add Book</button>
    </div>
  )
}

export default BookContainer
