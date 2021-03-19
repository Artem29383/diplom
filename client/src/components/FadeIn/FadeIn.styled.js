import styled from 'styled-components';

export default {
  FadeIn: styled.div`
    opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
    transition: ${({ time }) =>
      `opacity ${time}ms cubic-bezier(0.4, 0.0, 0.2, 1)`};
  `,
};
