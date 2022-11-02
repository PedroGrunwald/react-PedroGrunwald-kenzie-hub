import { AuthContext } from "../../Contexts/TechContext";
import React, { useContext } from "react";
import { TechName, TechStatus, TechList, StyledDiv } from "./styled";
import { BsFillTrashFill } from "react-icons/bs";

interface ICardProps {
  nameTechnology: string;
  statusTechnology: string;
  techId: number | string;
}

const Card = ({ nameTechnology, statusTechnology, techId }: ICardProps) => {
  const { RemoveTech } = useContext(AuthContext);
  return (
    <TechList>
      <TechName>{nameTechnology}</TechName>
      <StyledDiv>
        <TechStatus>{statusTechnology}</TechStatus>
        <BsFillTrashFill onClick={() => RemoveTech(techId)}>
          Deletar
        </BsFillTrashFill>
      </StyledDiv>
    </TechList>
  );
};
export default Card;
