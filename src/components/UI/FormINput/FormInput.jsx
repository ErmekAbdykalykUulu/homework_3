import "./FormInput.css"

const FormInput = ({id, labelName,placeholder,InputTipe, className, ...rest}) => {

console.log("rest", rest);

  return (
    <div className="container">
       <label className={className} htmlFor={id}>{labelName}</label>
       <input placeholder={placeholder|| "..."}
       id={id} 
       type ={InputTipe}
     {...rest}/>
 
    </div>
  )
}

export default FormInput
