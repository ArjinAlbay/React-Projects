

function ComponentSec(props) {
    return (
    <li className="concept"> 
    <img src={props.image} alt="" />
    <h1>{props.title}</h1>
    <p>{props.description}</p> 
    </li>
    )
  
}


export default ComponentSec;