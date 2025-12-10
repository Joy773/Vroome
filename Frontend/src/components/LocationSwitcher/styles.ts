import styled from "styled-components";

export const LocationSwitcherWrapper = styled.div`
    display: flex;
    grid-area: updown-button;
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    background-color: var(--color-blue-primary);
    border-radius: var(--border-radius-general);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
      transform: translate(-50%, -50%) scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translate(-50%, -50%) scale(0.95);
    }
    @media (min-width: 640px) {
      width: 56px;
      height: 56px;
      min-width: 56px;
      min-height: 56px;
    }
    @media (min-width: 768px) {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      width: 64px;
      height: 64px;
      min-width: 64px;
      min-height: 64px;
      align-self: center;
      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(0.95);
      }
    }
`;

