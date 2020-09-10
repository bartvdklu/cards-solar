import React from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styled from "styled-components";

const ScrollIndicator = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useSpring(yRange, { stiffness: 400, damping: 90 });
  return (
    <Container>
      <ProgressBar scaleY={scaleY} />
    </Container>
  );
};

export default ScrollIndicator;

const Container = styled.div`
  width: 2px;
  height: 150px;
  position: fixed;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  background: rgba(152, 152, 158, 0.3);
  border-radius: 5px;
`;

const ProgressBar = styled(motion.div)`
  width: 2px;
  height: 150px;
  background: #222;
  transform-origin: top;
  border-radius: 5px;
`;
