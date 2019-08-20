import React from 'react';

export type ErrorState = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<{}, ErrorState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: any, info: any) {
        console.log("error:", error);
        console.log("info", info);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Whoops, there's been an error!</h1>
                    <p>If you're a nerd you can check the console and send me error :)</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary