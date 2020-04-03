import React from "react";

import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default ({ align = "left", variant = "h1" }: TypographyProps) => (
  <Link to="/">
    <Typography
      style={{ fontFamily: "cursive", fontWeight: 700 }}
      align={align}
      color="primary"
      variant={variant}
    >
      Appname
    </Typography>
  </Link>
);
