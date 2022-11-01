import { AuthContext } from "../../Contexts/AuthContext";
import React, { useContext } from "react";
import { TechName, TechStatus, TechList } from "./styled";
import { BsFillTrashFill } from "react-icons/bs";

interface CardProps {
  nameTechnology: string;
  statusTechnology: string;
  techId: number | string;
}

const Card = ({ nameTechnology, statusTechnology, techId }: CardProps) => {
  const { RemoveTech } = useContext(AuthContext);
  return (
    <TechList>
      <TechName>{nameTechnology}</TechName>
      <TechStatus>{statusTechnology}</TechStatus>
      <BsFillTrashFill onClick={() => RemoveTech(techId)}>
        Deletar
      </BsFillTrashFill>
    </TechList>
  );
};
export default Card;
