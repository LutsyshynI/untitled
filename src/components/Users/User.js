export default function User(props) {
    let {item,but} = props;

    return (
        <div>
            <h3>{item.id}-{item.name}</h3>
            <button onClick={()=>{but(item)}} >Users_info</button>
        </div>
    )
}