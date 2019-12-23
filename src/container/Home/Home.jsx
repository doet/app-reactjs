import React, {Component} from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';

class Home extends Component {
 render(){
   return (
    <div>
      <p> Youtube Component</p>
      <hr/>
      <YoutubeComp time='07.12'/>
      <YoutubeComp time='03.20'/>
      <YoutubeComp time='12.00'/>
      <YoutubeComp />
    </div>
   )
 }
}

export default Home;
