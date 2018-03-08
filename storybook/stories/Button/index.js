import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import {
  Button,
  BackButton,
  SaveLaterButton,
  LightButton,
  UploadFile
} from "../../../src/Button";
import CenterView from "../CenterView";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories.addDecorator(getStory => <CenterView>{getStory()}</CenterView>);

stories.add("Button", () => {
  return <Button />;
});

stories.add("Button disabled", () => {
  const disabled = boolean("Disabled", true);
  return <Button disabled={disabled} />;
});

stories.add("LightButton default values", () => {
  const onPress = action("clicked-button");

  return <LightButton onPress={onPress} />;
});

stories.add("LightButton disabled", () => {
  const disabled = boolean("Disabled", true);
  const label = text("Label", "Continuer");
  const onPress = action("clicked-button");

  return <LightButton disabled={disabled} label={label} onPress={onPress} />;
});

stories.add("LightButton", () => {
  const disabled = boolean("Disabled", false);
  const label = text("Label", "Continuer");
  const onPress = action("clicked-button");

  return <LightButton disabled={disabled} label={label} onPress={onPress} />;
});

stories.add("BackButton", () => {
  const disabled = boolean("Disabled", false);
  const onPress = action("clicked-button");

  return <BackButton disabled={disabled} onPress={onPress} />;
});

stories.add("BackButton default values", () => {
  const onPress = action("clicked-button");
  return <BackButton onPress={onPress} />;
});

stories.add("BackButton disabled", () => {
  const disabled = boolean("Disabled", true);
  const onPress = action("clicked-button");

  return <BackButton disabled={disabled} onPress={onPress} />;
});

stories.add("SaveLaterButton", () => {
  const disabled = boolean("Disabled", false);
  const label = text("Label", "Save for Later");
  const labelLeft = boolean("Label on the left", false);
  const onPress = action("clicked-button");

  return (
    <SaveLaterButton
      disabled={disabled}
      label={label}
      labelLeft={labelLeft}
      onPress={onPress}
    />
  );
});

stories.add("Upload File", () => {
  const disabled = boolean("Disabled", false);
  const label = text("Label", "selectionner un fichier");
  const onPress = action("clicked-button");
  const labelLeft = boolean("labelLeft", false);
  return (
    <UploadFile
      disabled={disabled}
      label={label}
      onPress={onPress}
      labelLeft={labelLeft}
      myIcon={require("./icon_upload.png")}
    />
  );
});

stories.add("SaveLaterButton with left label", () => {
  const disabled = boolean("Disabled", false);
  const label = text("Label", "Save for Later");
  const labelLeft = boolean("Label on the left", true);
  const onPress = action("clicked-button");

  return (
    <SaveLaterButton
      disabled={disabled}
      label={label}
      labelLeft={labelLeft}
      onPress={onPress}
    />
  );
});

stories.add("SaveLaterButton disabled", () => {
  const disabled = boolean("Disabled", true);
  const label = text("Label", "Save for Later");
  const labelLeft = boolean("Label on the left", false);
  const onPress = action("clicked-button");

  return (
    <SaveLaterButton
      disabled={disabled}
      label={label}
      labelLeft={labelLeft}
      onPress={onPress}
    />
  );
});

stories.add("SaveLaterButton default", () => {
  const onPress = action("clicked-button");

  return <SaveLaterButton onPress={onPress} />;
});
