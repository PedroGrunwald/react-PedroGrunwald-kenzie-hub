import { Modal } from "antd";
import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: #121214;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
`;

export const Title = styled.h1`
  color: #ff577f;
`;

export const Buttton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16.2426px;
  gap: 10.15px;
  width: 60px;
  height: 35px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: #f8f9fa;
  background: #212529;
  border-radius: 4px;
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px grey solid;
  border-top: 1px grey solid;
`;

export const Name = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #f8f9fa;
`;

export const H3 = styled.h3`
  color: #f8f9fa;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
`;

export const ContainerUL = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #212529;
  margin: 2rem;
  padding: 2rem;
  gap: 1rem;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  .ant-modal-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }

  .ant-modal-header {
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
  box-sizing: border-box;
  gap: 1rem;
`;
export const StyledP = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 0px;
  color: #f8f9fa;
`;

export const StyledButton = styled.button`
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 5px;
`;
