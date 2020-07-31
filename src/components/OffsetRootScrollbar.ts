import GetScrollbarWidth from "../helpers/GetScrollbarWidth";

export default function (root: HTMLElement) {
  root.style.width = window.innerWidth + GetScrollbarWidth() + "px";
}
