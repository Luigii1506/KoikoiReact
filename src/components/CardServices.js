import react from 'react';
import '../CardServices.css';

const CardServices = (props) => {
    return (
       <div className='card-wrapper'>
           <div className='title-wrapper' style={{ backgroundImage: props.background }}>
               <p>{props.title}</p>
           </div>
           <div className='text-wrapper'>
               <p>
                    {props.text}
               </p>
               <ul className='list-packages'>

               </ul>
           </div>
       </div>
    );
}

export default CardServices;