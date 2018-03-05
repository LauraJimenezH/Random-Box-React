import React, {Component} from 'react'; 
import './css/box.css'

const Box = ({backgroundColor,fontFamily}) => {
    return ( 
        <div class="box" style={backgroundColor}>
            <p class={fontFamily}>'El mundo necesita gente que ame lo que hace'</p>
        </div>
    );
}

export default Box;