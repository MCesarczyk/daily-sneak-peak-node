import React from "react";
import { Skeleton } from "@mui/material";
import TileFooter from "./Footer";
import NotFound from "../../../../components/NotFound";
import { StyledTile } from "./styled";
import Image from "./Image";
import Name from "./Name";

const Tile = ({ child }) => (
  <>
    {!child
      ? <NotFound message="Sorry... no child data found." />
      : <StyledTile data-testid="child-tile">
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
    }
  </>
);

export default Tile;