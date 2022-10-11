import React from 'react'
import App from './app/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
export default function Thing() {
    return (

        <>
            <Provider store={store}>
                <App />
            </Provider>,
        </>
    )
}
