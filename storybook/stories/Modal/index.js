import React from "react";
import { View, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Modal from "../../../src/Modal";

const stories = storiesOf("Modal", module);

stories.addDecorator(withKnobs);

stories.add("Modal Info default values", () => {
  const onClose = action("clicked-close");
  const modalTitle = text("Title", "Informations importantes");

  return (
    <View>
      <Text>{`
        Background
        Background
        Background
        Background
        Background
        Background
        Background
      `}</Text>
      <Modal onClose={onClose} title={modalTitle} />
    </View>
  );
});

stories.add("Modal Info with dark", () => {
  const visible = boolean("Visible", true);
  const fullscreen = boolean("Fullscreen", true);
  const dark = boolean("Dark theme", true);
  const onClose = action("clicked-close");
  const modalTitle = text("Title", "Informations importantes");
  const myText = text(
    "Text",
    "Lorem ipsum dolor sit amet, his putent latine expetenda ex. Vim ne alii veritus, fugit ancillae est ea. Pro rebum invidunt antiopam an, per ut populo democritum efficiendi, cum an feugiat constituto posidonium. Et volutpat honestatis eloquentiam mel."
  );

  return (
    <View>
      <Text>{`
        Background
        Background
        Background
        Background
        Background
        Background
        Background
      `}</Text>
      <Modal
        visible={visible}
        fullscreen={fullscreen}
        dark={dark}
        onClose={onClose}
        title={modalTitle}
        text={myText}
      />
    </View>
  );
});

stories.add("Modal Info", () => {
  const visible = boolean("Visible", true);
  const fullscreen = boolean("Fullscreen", true);
  const dark = boolean("Dark theme", false);
  const onClose = action("clicked-close");
  const modalTitle = text("Title", "Informations importantes");
  const modalText = text(
    "Text",
    "«Selon les Parties XVIII et XIX de la Loi de l’impôt sur le revenu," +
      " les institutions financières canadiennes doivent recueillir les renseignements" +
      " quant aux résidences aux fins de l’impôt des titulaires de comptes financiers" +
      " qu’elles tiennent et transmettre, à l’Agence du revenu du Canada (ARC), les " +
      "informations relatives aux comptes financiers détenus par des résidents " +
      "fiscaux étrangers. L’ARC peut ensuite communiquer ces renseignements au " +
      "gouvernement d’une juridiction étrangère dont un titulaire de compte est résident" +
      " aux fins de l’impôt, ou au gouvernement des États-Unis s’il est citoyen de ce pays."
  );

  return (
    <View>
      <Text>{`
        Background
        Background
        Background
        Background
        Background
        Background
        Background
      `}</Text>
      <Modal
        onClose={onClose}
        text={modalText}
        title={modalTitle}
        visible={visible}
        fullscreen={fullscreen}
        dark={dark}
      />
    </View>
  );
});
