import styled from "styled-components";

export default function Footer() {
  return (
    <CustomFooter>
      Made by Lizzy Truong for GA Software Immersive Course 2022. All images are
      from Bistro Morgan
    </CustomFooter>
  );
}

const CustomFooter = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  font-size: 12px;
  bottom: 0;
  background-color: pink;
  color: white;
`;
