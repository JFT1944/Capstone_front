import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DispensaApi from "./ApiHelper";

function FullForm(props){
let {user} = props
const [value, setValue] = useState('')
const [rvalue, setRValue] = useState('')
const navigate = useNavigate()
// console.log(user)


function handleChange(e){
e.preventDefault()
console.log(e.target.name)
if(e.target.name === 'Ingredients'){
setValue(e.target.value)}
else{
setRValue(e.target.value)
}

}

function handleClick(e){
    e.preventDefault()

    if(rvalue && value){
        console.log('rValue')
    }

   if(value){
    DispensaApi.createAllIngredients(user, value).then((res) => {
        console.log(res)
        navigate('/pantry')
    })
   }
   


return
}


    if(user){
        return(
            <>
    
            <form style={{transform:'translateY(50px)'}} className="iForms">
                <h2>Copy And Paste Ingredients Here</h2>
                <span style={{alignItems:'center'}}><span style={{textAlign:'left', width:'40vw', minWidth:'275px'}}>Recipe Name</span><input type='text' name="recipe_name" value={rvalue} placeHolder='Recipe Name (Not Necessary)' onChange={(e) => handleChange(e)}/></span>
                <span style={{alignItems:'center'}}>
                <span style={{textAlign:'left', width:'40vw', minWidth:'275px'}}>Recipe Ingredients</span>
                <textarea name="Ingredients" value={value} onChange={(e) => handleChange(e)} ></textarea>
                </span>
                <span style={{alignItems:'center'}} className="submit_button"><input type={'submit'} onClick={(e) => handleClick(e)}/></span>
            </form>
            </>
        )
    }else{
         navigate('/') 
    }
}

export default FullForm