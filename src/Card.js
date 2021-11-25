import React, { Component } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import ImageComponent from "./components/ImageComponent";
import { rollD20 } from "./utils";
import { ElementType } from "./constants";
import PropTypes from "prop-types";

class Card extends Component {
  render() {
    const { element, onUpdateField, onInitiativeChange, onRemove } = this.props;
    return (
      <div className="card">

        <ImageComponent 
          url="images/user.png"
          className="characterImage"
          type="img"
        />

        <Input
          label="Name"
          type="text"
          value={element.name}
          onChange={(e) => onUpdateField(element.id, e, "name")}
          className="wide-input"
        />

        <Input
          label="Initiative"
          type="number"
          value={element.initiative}
          onChange={(e) => onInitiativeChange(element.id, e)}
        />
        <Button
          onClick={() =>
            onInitiativeChange(element.id, { target: { value: rollD20() } })
          }
          title="Roll D20"
          label="D20"
        />

        <Input
          label="Hitpoints"
          type="number"
          value={element.hitpoints}
          onChange={(e) => onUpdateField(element.id, e, "hitpoints")}
        />

        <Button onClick={() => onRemove(element.id)} title="Remove" label="X" />
      </div>
    );
  }
}

Card.propTypes = {
  element: ElementType,
  onUpdateField: PropTypes.func,
  onInitiativeChange: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Card;
