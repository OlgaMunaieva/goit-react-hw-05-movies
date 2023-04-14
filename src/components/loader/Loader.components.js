import styled from 'styled-components';

export const LoaderContainer = styled.div`
  margin: 10px auto 20px;
  width: 160px;
  height: 60px;
  position: relative;
  /* left: 50%; */
  /* top: 50%; */
  /* transform: translate(-50%, -50%); */
`;

export const LoaderCircle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #3f51b5;
  left: 15%;
  transform-origin: 50%;
  animation: circle 300ms alternate infinite ease;

  @keyframes circle {
    0% {
      top: 60%;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }
  :nth-child(2) {
    left: 45%;
    animation-delay: 100ms;
  }
  :nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 200ms;
  }
`;

export const LoaderShadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 220, 0.5);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow 300ms alternate infinite ease;
  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }
  :nth-child(4) {
    left: 45%;
    animation-delay: 100ms;
  }
  :nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 200ms;
  }
`;
