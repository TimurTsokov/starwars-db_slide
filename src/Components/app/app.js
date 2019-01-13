import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErorBoundry from '../errorBoundry';
import SwapiService from '../../Services/swapi-service';

import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';

import {SwapiServiceProvider} from '../swapi-service-context';
import './app.scss';

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    DummySwapiService = () => { // Заглушка вместо тестовых локальных данных
        console.log('DummySwapiService')
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? this.DummySwapiService : SwapiService;
            console.log('Switched to', Service.name);
            return {
                swapiService: new Service()
            }
        })
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <ErorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
                    </div>
                </SwapiServiceProvider>
            </ErorBoundry>
        )
    }
}
