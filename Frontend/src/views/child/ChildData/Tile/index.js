import React from "react";
import { Skeleton } from "@mui/material";
import TileFooter from "./Footer";
import NotFound from "../../../../components/NotFound";
import { StyledTile } from "./styled";
import Avatar from "./Avatar";
import Heading from "./Heading";

const Tile = ({ state, avatarUrl, headingData, footerData }) => (
  <>
    {state.notFound
      ? <NotFound message={state.errorMessage} />
      : <StyledTile data-testid="details-tile">
        <Avatar url={avatarUrl} />
        {state.loading ?
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