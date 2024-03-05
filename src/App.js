import React from 'react';
import AppContainer from './router/Router';
import {Provider} from 'react-redux';
import configureStore from './redux/store/Store';

const store = configureStore();

type Props = {};

export default class App extends React.Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}
