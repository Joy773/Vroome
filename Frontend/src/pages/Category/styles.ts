import styled from "styled-components";

export const CarDetailsWrapper = styled.main`
  --spacing-1: 2.25%;
  --spacing-2: 4.45%;

  height: 100%;
  min-height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  @media (min-width: 640px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
  @media (min-width: 768px) {
    margin: 0;
    flex-direction: row;
    padding: 2rem;
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem;
    gap: 2.5rem;
  }
`;

export const AsideLeft = styled.aside`
  width: 100%;
  min-width: 100%;
  height: auto;
  background: white;
  order: 2;
  @media (min-width: 640px) {
    min-width: 320px;
  }
  @media (min-width: 768px) {
    width: 360px;
    min-width: 360px;
    max-width: 360px;
    margin: 0;
    order: 1;
    flex-shrink: 0;
  }
  @media (min-width: 1024px) {
    width: 400px;
    min-width: 400px;
    max-width: 400px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
  margin: 0;
  order: 1;
  @media (min-width: 640px) {
    padding: 1.5rem 0;
  }
  @media (min-width: 768px) {
    margin: 0;
    flex-grow: 1;
    padding: 2rem 0;
    order: 2;
    max-width: calc(100% - 360px - 2rem);
  }
  @media (min-width: 1024px) {
    padding: 3rem 0;
    max-width: calc(100% - 400px - 2.5rem);
  }
`;

export const MoreDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 2rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const MoreBtn = styled.div`
  justify-content: center;
  align-items: center;
  padding: 14px 25px;
  background: #3563E9;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

