import React from "react";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";

type Icons = {
  icon: string;
  sx: { color: string };
};
export default function Iconify({ icon, sx }: Icons) {
  return <Box component={Icon} icon={icon} sx={sx} />;
}
