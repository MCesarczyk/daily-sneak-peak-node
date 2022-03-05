import React from "react";
import { Skeleton } from "@mui/material";
import TileFooter from "./Footer";
import Image from "./Image";
import Name from "./Name";
import { StyledTile } from "./styled";

const Tile = ({ child }) => (
  <StyledTile data-testid="child-tile">
    <Image />
    {child && Object.entries(child).length === 0 ?
      <>
        <Skeleton height={42} />
        <Skeleton height={36} />
      </>
      :
      <Name
        name={child?.name + ' ' + child?.surname}
        group={child?.group}
      />
    }
    <TileFooter />
  </StyledTile>
);

export default Tile;