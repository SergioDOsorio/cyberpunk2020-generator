export default function Characteristic({item,value}){
    return(
        <div className="char">
            <p>{item}</p>
            <div>{value}</div>
        </div>
    )
}