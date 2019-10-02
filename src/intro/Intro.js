import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import colorJSON from '../data/discrete_colors.json'

const Intro = () => {

    let colors = [...colorJSON];
    console.log(colors);

    useEffect( () => {
        anime({
            targets: '.boxes',
            //translateX: 50, 
            translateY: 75,
            rotateX: -180,
            rotateY: -120,
            duration: 2000,
            loop: true,
            delay: anime.stagger(100, {from: 'center'}),
            easing: 'easeInOutSine', 
            //scaleY: 2,
            height: '50%',
            opacity: 1,
            direction: 'alternate'
        });
    })

    const createEl = (color) => {
        
        let el = <div className={"boxes"} style={{backgroundColor: color["hex"]}}></div>
        return el;
    }


    return (
      <div className={"background"}>
      <div style={{height: "80vh", width: "100vh"}} className="box-of-boxes"> 
          {colors.map(createEl)}
      </div>
      <div className={"heading"}  style={{height: "20vh", width: "100vh"}}>
        <h1>A Dyas</h1>
      </div>
      </div>
      
    );
} 

export default Intro;