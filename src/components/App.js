import React from 'react';
import Header from './header';
import ContestPreview from './ContestPreview';

class App extends React.Component { 
    state = { 
        pageHeader: 'Naming Contests'
    };

    render() {
        return (
            <div className="App">
                <Header message= {this.state.pageHeader} />
                <div>
                    {this.props.contests.map(contest => 
                        <ContestPreview  {...contest} 
                        key={contest.id} />
                    )}
                    
                </div>
            </div>

        );
    }
}

export default App;