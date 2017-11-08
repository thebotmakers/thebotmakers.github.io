import React from 'react'

export class Section extends React.Component {

    render() {

        return (
            <section id={this.props.id}>
                <div className="container">
                    {this.props.children}
                </div>
            </section>

        );
    }
}
