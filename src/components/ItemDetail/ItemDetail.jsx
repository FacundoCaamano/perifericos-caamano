
export const ItemDetail=({data})=>{
    return(
        <div>
            <img src={data.img} alt="" />
            <h3>{data.modelo}</h3>
        </div>
    )
}