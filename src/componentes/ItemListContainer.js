
const ItemListContainer = (props) => {
    console.table (props.nombre)

    return(
        <main className="conten-item">
            <h3>Bienvenidos a la tienda online de {props.nombre} {props.apellido} 
            {props.rubro}  

         </h3>
        </main>
    )
}


export default ItemListContainer;



