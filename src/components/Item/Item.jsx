import "./Item.css"
export const Item =({info})=>{
    return(
        <div className="contenedor__card">
            <img className="producto__foto" src={info.img} alt="" />
            <p className="porducto__nombre">{info.marca} {info.modelo}</p>
        </div>
    )
    
}