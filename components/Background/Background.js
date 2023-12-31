'use client'
import styled from "styled-components";
import { useSelector } from "react-redux";
const Main = styled.div`
width: 100vw;
min-height: 100vh;
position: fixed;
display: flex;
justify-content: center;
padding: 100px 24px 140px 24px;
pointer-events: none;

&::before {
  background: radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 400%);
  position: absolute;
  content: "";
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
}

&::after {
  content: "";
  background-image: url("/images/grid.svg");
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 1;
  filter: ${(props) => (props.$isdark ? "invert(0)" : "invert(1)")};
}
`;

const Gradient = styled.div`
height: fit-content;
z-index: 3;
width: 100%;
max-width: 640px;
background-image: radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
                  radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
                  radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
                  radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
                  radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
                  radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
                  radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
position: absolute;
content: "";
width: 100%;
height: 100%;
filter: blur(100px) saturate(150%);
top: 80px;
opacity: 0.15;
`;

const Background = () => {
  const isDark = useSelector(state => state.nav.isDark);
  return (
    <Main $isdark={isDark}>
      <Gradient></Gradient>
    </Main>
  )
}

export default Background
