import { useState } from 'react'
import Header from "./Header";
import "./index.css";
import { sharks } from "./Data";
import Shark from "./Shark";
import "./css/Shark.css"







function App() {
  return (
    <div>
      <Header />
      <div className='shark-main'>
        {
          sharks?.map((shark) => (
            <Shark key={shark.id} shark={shark} />
          )
          )
        }



      </div>






    </div>
  )
}

export default App;








