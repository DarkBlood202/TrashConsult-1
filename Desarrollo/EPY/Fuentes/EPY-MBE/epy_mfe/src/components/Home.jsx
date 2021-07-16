import React from 'react';
import Preguntas from './Preguntas'
import '../css/index.css';

const Home = () => (

    <div className="row m-0 vh-10 align-items-center justify-content-center">
        <div className="card bg-light col-md-11 mb-auto p-5 text-center" style={{ margin: '3%', borderRadius: '15px' }} >
    <ul className="cards">
    <Preguntas/>
    <Preguntas/>
    <Preguntas/>
    </ul>
   
    </div>


</div>

)

export default Home;