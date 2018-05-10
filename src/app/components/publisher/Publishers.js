import React from 'react';
import {Publisher} from '../publisher/Publisher';

import {LoadPublishers} from '../../utils/LoadBooks';

export class Publishers extends React.Component {
    constructor(props) {
        super();
        this.all_publishers = LoadPublishers();
    }

    render() {
        return (
            <div className="container">
                <div className="title">
                    <h2>All Publishers</h2>
                    <hr/>
                </div>
                <div className="row">
                    {
                        typeof this.props.publishers != "undefined" ?
                            this.props.publishers.map((publisher) => <Publisher key={publisher.id} detail={publisher}/>) :
                            this.all_publishers.map((publisher) => <Publisher key={publisher.id} detail={publisher}/>)
                    }
                </div>
            </div>
        );
    }
}