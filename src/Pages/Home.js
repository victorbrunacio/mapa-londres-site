import React from 'react'
import * as S from "../Pages.Style/Home.Style"
import {Link} from "react-router-dom"




function Home() {
 
  let ferramenta = require("../img/ferramenta.png");
  return (
    <S.container>
     
      <Link to="/map" ><img src={ferramenta} alt="ferramenta" /></Link>
    
    </S.container>
    
  )
}

export default Home
