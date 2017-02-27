import React from 'react';
import Header from './header';
import ContestPreview from './ContestPreview';

class App extends React.Component { 
    state = { 
        pageHeader: 'Naming Contests',
        contests: []
    };

    componentDidMount() {
        // ajax ...
        this.setState({
            contests: data.contests 
        });
    }

    render() {
        return (
            <div className="App">
                <Header message= {this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest => 
                        <ContestPreview  key={contest.id} {...contest} 
                         />
                    )}
                    
                </div>
            </div>

        );
    }
}

export default App;