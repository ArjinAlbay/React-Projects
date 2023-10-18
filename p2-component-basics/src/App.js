
import './index.css'
import  componentsImage  from "./images/components.png";
import  stateImage  from "./images/state.png";
import  eventsImage  from "./images/events.png";
import  keyConcepts from  "./images/key-concepts.png";


import KeyConcepts from './components/KeyConcept'
import  ComponentSec  from "./components/ComponentSec";
import  StateSec  from "./components/StateSec";
import  EventsSec  from "./components/EventsSec";

const concepts =[
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  }
]


function App() {

  return (
   <div>

     <KeyConcepts  imageKey={keyConcepts} />
      <ul id="concepts">
        
        <ComponentSec  title={concepts[0].title} image={concepts[0].image} description={concepts[0].description} />
        <StateSec  title={concepts[1].title} image={concepts[1].image} description={concepts[1].description} />
        <EventsSec  title={concepts[2].title} image={concepts[2].image} description={concepts[2].description} />
      </ul>
      </div>
  );
}

export default App;
