import React from "react";
import { useSelector } from "react-redux";
import { selectChildData } from "../../childSlice";
import { Skeleton } from "@mui/material";
import TileFooter from "./Footer";
import Image from "./Image";
import Name from "./Name";
import { StyledTile } from "./styled";

const Tile = () => {
  const child = useSelector(selectChildData);

  return (
    <StyledTile>
      <Image />
      {Object.entries(child).length === 0 ?
        <>
          <Skeleton height={42} />
          <Skeleton height={36} />
        </>
        :
        <Name
          name={child.name + ' ' + child.surname}
          group={child.group}
        />
      }
      <TileFooter />
    </StyledTile>
  );
};

export default Tile;