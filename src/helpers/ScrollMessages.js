import { animateScroll } from "react-scroll";
export const ScrollToBottom = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 0,
  });
};
export const ScrollToBottomAnimated = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 300,
  });
};
