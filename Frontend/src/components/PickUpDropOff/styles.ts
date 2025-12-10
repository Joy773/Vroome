import styled from "styled-components";

export const PickUpDropOffWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  @media (min-width: 768px) {
    padding: 2rem 2.3rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem;
  }
`;

export const PickUpDropContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
  }
  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;

