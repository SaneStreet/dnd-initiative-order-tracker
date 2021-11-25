import React, { Component } from "react";

class ImageComponent extends Component {
    render() {
        return (
            <div class="characterImage">
                <img src={this.props.url} alt="display avatar"/>
            </div>
        );
    }
}

export default ImageComponent;