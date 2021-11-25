import React, { Component } from "react";
import FlipMove from 'react-flip-move';
import "./App.css";
import Button from "./components/Button";
import ImageComponent from "./components/ImageComponent";
import Card from "./Card";
import { randomId, updateListElement } from "./utils";
import { initialState } from "./constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: initialState,
    };
  }

  // Update a field
  updateField = (id, e, field) => {
    const { value } = e.target;
    this.setState({ 
      elements: updateListElement(this.state.elements, id, field, value) 
    });
  };

  // Update initiative
  updateInitiative = (id, e) => {
    clearTimeout(this.timeout_);
    this.updateField(id, e, 'initiative');
    this.timeout_ = setTimeout(() => this.sortElements(), 500);
  };

  // Sort the elements
  sortElements = () => {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative),
    });
  };

  // Add a Card element
  addCard = () => {
    const { elements } = this.state;
    elements[elements.length] = {
      id: randomId(),
      name: `Player ${elements.length + 1}`,
      initiative: -100,
      hitpoints: 12,
    };
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative),
    });
  };

  // Remove an element
  removeElement = (id) => {
    let { elements } = this.state;
    elements = elements.filter((el) => el.id !== id);
    this.setState({ elements });
  };

  // Render the app components
  render() {
    const { elements } = this.state;
    return (
      <div>
        <div className="header">
          <Button 
            onClick={this.addCard} 
            label="Add New Card" bold />
        </div>

        <FlipMove
          easing="ease-in-out"
          duration={400}
          delay={0}
          staggerDurationBy={0}
          staggerDelayBy={300}
          appearAnimation="elevator"
        >
          {elements.map((element) => (
            <Card
              key={element.id}
              element={element}
              onUpdateField={this.updateField}
              onInitiativeChange={this.updateInitiative}
              onRemove={this.removeElement}
            />
          ))}
        </FlipMove>
        
      </div>
    );
  }
}

export default App;
