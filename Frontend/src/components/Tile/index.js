import React from "react";
import { Skeleton } from "@mui/material";
import TileFooter from "./Footer";
import NotFound from "../NotFound";
import { StyledTile } from "./styled";
import Avatar from "./Avatar";
import Heading from "./Heading";
import Loader from "../Loader";

const Tile = ({ state, componentsState, avatarUrl, headingData, footerData }) => (
  <Loader
    state={state}
    message="Loading"
  >
    {componentsState.notFound
      ? <NotFound message={componentsState.errorMessage} />
      : <StyledTile data-testid="details-tile">
        <Avatar url={avatarUrl} />
        {componentsState.loading ?
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
  </Loader>
);

export default Tile;