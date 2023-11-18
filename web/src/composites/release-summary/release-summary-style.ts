import { css } from 'lit';

export const releaseSummaryStyle = css`
  .main-container {
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    width: 210px;
    height: 230px;
    position: relative;
    background-color: var(--surface-dim);
    color: var(--on-surface);
    box-shadow: 0px 1px 3px 1px #000000;
  }

  .top-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }

  .bottom-container {
    height: fit-content;
    width: fit-content;
    margin: auto;
    position: relative;
  }

  .sprint-selection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-height: 90px;
    overflow: auto;
    padding-bottom: 10px;
  }

  .sprint-selection::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .release-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .date {
    font-size: 0.75rem;
    font-weight: 700;
    color: #383838;
  }

  .horizontal-space {
    position: absolute;
    width: 90%;
    border: none;
    height: 1px;
    background-color: rgb(0, 0, 0);
    transform: translateY(-50%);
    left: 5%;
  }

  .sprint-button-open {
    --harmony-button-background-color: var(--primary);
    --harmony-button-color: var(--on-primary);
    --harmony-button-hover-background-color: var(--primary-fixed-dim);
    --harmony-button-active-background-color: var(--primary-fixed);
    --harmony-button-border-radius: 2rem;
  }

  .sprint-button-running {
    --harmony-button-background-color: var(--tertiary);
    --harmony-button-color: var(--on-tertiary);
    --harmony-button-hover-background-color: var(--tertiary-fixed-dim);
    --harmony-button-active-background-color: var(--tertiary-fixed);
    --harmony-button-border-radius: 2rem;
  }

  .sprint-button-finished {
    --harmony-button-background-color: var(--secondary);
    --harmony-button-color: var(--on-secondary);
    --harmony-button-hover-background-color: var(--secondary-fixed-dim);
    --harmony-button-active-background-color: var(--secondary-fixed);
    --harmony-button-border-radius: 0.25rem;
  }

  .add-button {
    --harmony-button-background-color: var(--primary);
    --harmony-button-color: var(--on-primary);
    --harmony-button-border-radius: 2rem;
    --harmony-button-hover-background-color: var(--primary-fixed-dim);
    --harmony-button-active-background-color: var(--primary-fixed);
  }

  .info-button-open {
    --info-button-background-color: var(--primary);
    --info-button-text: var(--on-primary);
    --info-button-border-radius: 0;
  }

  .info-button-running {
    --info-button-background-color: var(--tertiary);
    --info-button-text: var(--on-tertiary);
    --info-button-text: white;
    --info-button-border-radius: 0;
  }

  .info-button-finished {
    --info-button-background-color: var(--secondary);
    --info-button-text: var(--on-secondary);
    --info-button-border-radius: 0;
  }
`;
