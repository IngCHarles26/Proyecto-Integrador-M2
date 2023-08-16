import Card from './Card';

export default function Cards(props) {
   const {characters} = props;
   return (
      <div>
         {characters.map(el=>{
            return <Card 
               character={el}
               id={el.id}
               name={el.name} 
               status={el.status} 
               species={el.species} 
               gender={el.gender} 
               origin={el.origin.name} 
               image={el.image} 
               onClose={props.onClose}
               key={el.id}
            />
         })}
      </div>
   );
}