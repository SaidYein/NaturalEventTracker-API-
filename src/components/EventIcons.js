import { Icon } from "@iconify/react";
import fireTwotone from "@iconify/icons-ant-design/fire-twotone";
import twotoneStorm from "@iconify/icons-ic/twotone-storm";
import twotoneVolcano from "@iconify/icons-ic/twotone-volcano";
import snowIcon from "@iconify/icons-bi/snow";

const icons = {
  8: {
    class: "wildfires",
    title: "Wildfires",
    icon: <Icon icon={fireTwotone} />,
  },

  10: {
    title: "Severe Storms",
    class: "severeStorms",
    icon: <Icon icon={twotoneStorm} />,
  },
  12: {
    title: "Volcanoes",
    class: "volcanoes",
    icon: <Icon icon={twotoneVolcano} />,
  },
  15: {
    title: "Sea And Lake Ice",
    class: "seaAndLakeIce",
    icon: <Icon icon={snowIcon} />,
  },
};

export default icons;
