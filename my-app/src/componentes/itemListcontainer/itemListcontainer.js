

import CustomButton from '../custombutton/customButton'

const ItemListcontainer =( {greeting}) => {
  return (
    <>
    <h2>{greeting}</h2> 
    <CustomButton texto = {"sumar"} />
    </>
  )
}

export default ItemListcontainer;