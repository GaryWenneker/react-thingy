import * as React from 'react';
import { StaticRouter, Router } from 'react-router';
import { history } from '../store/store';
import { Environment } from '../Environment';
import { ApplicationContext, ApplicationContextConsumerProps } from '../ApplicationContext';
import Routes from './Routes';
import { ErrorBoundary } from '../ui/ErrorBoundary';

type ApplicationRoutesAllProps = {};

export default class ApplicationRoutes extends React.Component<ApplicationRoutesAllProps> {

    public constructor(props: ApplicationRoutesAllProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <ApplicationContext.Consumer>
                {(applicationContextConsumer: ApplicationContextConsumerProps) => {
                    return (
                        Environment.isServer
                            ? (
                                <StaticRouter context={{}} location={applicationContextConsumer.applicationContext.relativeUrl}>
                                    <Routes />
                                </StaticRouter>
                            )
                            : (
                                <Router history={history}>
                                    <Routes />
                                </Router>
                            )
                    );
                }}
            </ApplicationContext.Consumer>
        );
    }
}