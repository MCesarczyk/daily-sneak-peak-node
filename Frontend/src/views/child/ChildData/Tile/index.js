import React from "react";
import { Skeleton } from "@mui/material";
import TileFooter from "./Footer";
import NotFound from "../../../../components/NotFound";
import { StyledTile } from "./styled";
import Image from "./Image";
import Heading from "./Heading";

const Tile = ({ child, headingData, footerData }) => (
  <>
    {!child
      ? <NotFound message="Sorry... no child data found." />
      : <StyledTile data-testid="child-tile">
        <Image child={child} />
        {child && Object.entries(child).length === 0 ?
          <>
            <Skeleton height={42} />
            <Skeleton height={36} />
          </>
          :
          <Heading data={headingData} />
        }
        <TileFooter data={footerData} />
      </StyledTile>
    }
  </>
);

export default Tile;