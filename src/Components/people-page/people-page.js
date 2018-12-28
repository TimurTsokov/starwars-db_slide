import React, {Component} from 'react';
import './people-page.scss';
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../Services/swapi-service'
import Row from '../Row'
import ErrorBoundry from '../errorBoundry'


export default class PeoplePage extends Component {
    swapiService = new SwapiService;
    state = {
        selectedPerson: 3
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson})
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
            >
                {(i) => (
                    `${i.name}(${i.birthYear})`
                )}
            </ItemList>

        );
        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundry>

        );
        return (
            <Row left={itemList} right={personDetails}/>
        )

    }
}
