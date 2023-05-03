import React from "react";
import Input from "../Input/Input";
import Selects from "../Select/Selects";
import RadioButton from "../Radiobutton/RadioButton";
import Checkboxs from "../Checkbox/Checkboxs";
import Button from "../Button/Button";
import Table from "../Table/Table";

function FormControl({ condition, ...rest }) {
  return (
    <div>
      {/* Using switch condition */}
      {(() => {
        switch (condition) {
          case "input":
            return <Input rest={rest} />;
          case "select":
            return <Selects rest={rest} />;
          case "radio":
            return <RadioButton rest={rest} />;
          case "checkbox":
            return <Checkboxs rest={rest} />;
          case "button":
            return <Button rest={rest} />;
          case "tablehead":
            return <Table rest={rest} />;
        }
      })()}
    </div>
  );
}

export default FormControl;
