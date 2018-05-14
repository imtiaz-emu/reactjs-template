import React from 'react';
import {LoadPublishers} from '../../utils/LoadBooks';

export class PublisherForm extends React.Component {
    constructor(props) {
        super();
        this.state = {publisher: {}};
    }

    componentDidMount() {
        this.getPublisherById(this.props.match.params.id);
    }

    getPublisherById(id) {
        var new_state_publisher = this.state.publisher;
        var publishers = LoadPublishers();
        new_state_publisher = publishers.filter(function (publisher) {
            if (publisher.id === id) {
                return publisher;
            }
        });
        this.setState({publisher: new_state_publisher[0]});
    }

    render() {
        return (
            <section className="product-sec">
                <div className="container">
                    <div className="row">
                        TODO: Edit/Create Publisher
                    </div>
                </div>
            </section>
        );
    }
}
