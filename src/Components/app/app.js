import React, {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import Row from '../Row'
import ItemList from '../item-list'
import ItemDetails, {Record} from '../item-details/item-details'

import ErrorIndicator from '../error-indicator'
import ErorBoundry from '../errorBoundry'
import SwapiService from '../../Services/swapi-service'
import {
    PersonList, PersonDetails, PlanetList, PlanetDetails, StarshipList, StarshipDetails
} from '../sw-components'


import './app.scss'

export default class App extends Component {
    swapiService = new SwapiService;
    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState({
            ...this.state,
            showRandomPlanet: !this.showRandomPlanet
        })
    };


    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErorBoundry>
                <div className="stardb-app">
                    <Header/>

                    <PersonDetails itemId={11}/>
                    <PlanetDetails itemId={5}/>
                    <StarshipDetails itemId={9}/>

                    <PersonList>
                        {({name}) => <span>{name}</span>}
                    </PersonList>
                    <StarshipList>
                        {({name}) => <span>{name}</span>}
                    </StarshipList>
                    <PlanetList>
                        {({name}) => <span>{name}</span>}
                    </PlanetList>
                </div>
            </ErorBoundry>
        )
    }
}
