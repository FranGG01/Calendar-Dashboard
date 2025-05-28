
import './CustomButton.css'

function CustomButton({ iconClass, label }) {
 

  return (
    <>
     <button className='button'>
      <i className={iconClass}></i>
      <label>{label}</label>
    </button>
    </>
  )
}

export default CustomButton;
