import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider/slider'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Slider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
 serviceWorker.unregister();

// class SwapiService {
//
//     _apiBase = 'https://swapi.co/api';
//
//    async getResourse(url){
//        const res = await fetch(`${this._apiBase}${url}`);
//        if (!res.ok){
//            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`); //error 404
//        }
//        return await res.json();
//    }
//
//    async getAllPeople(){
//        const res = await this.getResourse(`/people/`);
//        return res.results;
//    }
//     getPerson(id){
//         return this.getResourse(`/people/${id}/`)
//     }
//     async getAllPlanets(){
//         return this.getResourse(`/planets/`);
//         return res.results;
//     }
//     getPlanet(id){
//         return this.getResourse(`/planets/${id}`)
//     }
//     async getAllStarships(){
//         return this.getResourse(`/starships/`);
//         return res.results;
//     }
//     getStarship(id){
//         return this.getResourse(`/starships/${id}`)
//     }
// }
// const swapi = new SwapiService();
// swapi.getPerson(3).then((p)=>{
//        console.log(p.name);
//  });

// getResourse('https://swapi.co/api/people/18787/')
//     .then((body)=>{
//        console.log(body);
//     })
//     .catch((err) =>{
//         console.error('Could not fetch', err);
//     });