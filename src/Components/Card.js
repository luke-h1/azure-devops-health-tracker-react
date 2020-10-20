import React,{Fragment} from 'react'; 


const Card = () => { 
  return ( 
    <Fragment>
       <div className="card">
          <ul className="list">
            <li> SERVICE: </li>
            <li> COUNTRY: </li>
            <li> REGION: </li>
            <li> STATUS:</li>
          </ul>
        </div>
    </Fragment>
  )
}
export default Card;