import { css } from 'lit';

export const globalStyle = css`
  :host {
    --primary: #1b4332;
    --on-primary: white;
    --primary-fixed-dim: #264c3b;
    --primary-fixed: #325545;

    --secondary: #474e55;
    --on-secondary: white;
    --secondary-fixed-dim: #50565d;
    --secondary-fixed: #585f65;

    --tertiary: #e27d09;
    --on-tertiary: white;
    --tertiary-fixed-dim: #e58420;
    --tertiary-fixed: #e98a2f;

    --secondary-container: #9ac1d9;
    --on-secondary-container: #062031;

    --surface: #fafbfc;
    --surface-dim: #f9fafb;
    --surface-bright: white;
    --on-surface: #171717;
  }

  .elevation-1 {
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .elevation-2 {
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .elevation-3 {
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .elevation-4 {
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .elevation-5 {
    box-shadow:
      0 19px 38px rgba(0, 0, 0, 0.3),
      0 15px 12px rgba(0, 0, 0, 0.22);
  }

  .ambient-shadow {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
