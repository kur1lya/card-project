
//COMPONENT

import Dambldor from "./Card/Dambldor/Dambldor";
import Harry from "./Card/Harry/Harry";
import Severus from "./Card/Severus/Severus";
import Voldemort from "./Card/Voldemort/Voldemort";


//  Carousel
export let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />
];


//Dambldor
export let description_cards =    {
        dambldor: <p>Albus Dumbledore was never proud or vain;
    he could find something to value in anyone,however apparently insignificant or wretched</p>
    }



//Search
   export  const products = [
        { category: <Harry dambldor={description_cards.dambldor} />, name: 'Harry' },
        { category: <Voldemort />, name: 'Voldemort' },
        { category: <Severus />, name: 'Severus' },
        { category:  <Dambldor  />, name: 'Dambldor' },
    
    
    ];

    console.log()