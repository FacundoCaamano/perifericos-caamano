import "./ItemDetail.css"
export const ItemDetail=({data})=>{
    return(
        <div>
            <img src={data.img} alt="" />
            <div className="detalles__productos">
                <div className="detalles__productos--info">
                    <div className="etiquetas">
                        <h2>Marca: </h2>
                        <h3>Modelo: </h3>
                        <h3>Categoria: </h3>
                    </div>
                    <div className="datos">
                        <p>{data.marca}</p>
                        <p>{data.modelo}</p> 
                        <p>{data.categoria}</p>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}