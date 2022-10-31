import { AuthContext } from "../../Contexts/AuthContext";
import React, {useContext } from "react";
import { TechName, TechStatus, TechList } from "./styled";
import { BsFillTrashFill } from "react-icons/bs";

// interface IcardProps {
//   nameTechnology: 
//   statusTechnology: 
//   techId: 
//   RemoveTech: 
// }

const Card = ({ nameTechnology, statusTechnology, techId }) => {
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
