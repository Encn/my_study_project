'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let SelectField = require('material-ui/lib/select-field');
let MenuItem = require('material-ui/lib/menus/menu-item');

let injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

class Main extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {value:2};
    }

    render () {
        return (<div>
                <SelectField value={this.state.value} onChange={(e, i, value) => this.setState({value})}>
                    <MenuItem value={1} primaryText='Never'/>
                    <MenuItem value={2} primaryText='Every Night'/>
                    <MenuItem value={3} primaryText='Weeknights'/>
                </SelectField>
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('pager'));
