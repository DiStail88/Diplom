import styled from 'styled-components';

export const SignInBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const SignInBlock = styled.div<{ $hasError?: boolean }>`
  width: 360px;
  height: ${({ $hasError }) => ($hasError ? '527px' : '487px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: white;
  transition: height 0.3s ease;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  margin: -20px 0 10px 0;
`;

export const SignInLogo = styled.img`
  width: 220px;
  height: 35px;
`;

export const SignInForm = styled.form`
  /* Frame 2043683051 */
  width: 280px;
  height: 324px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 34px;
`;

export const SignInInputBlock = styled.div`
  /* Frame 2043683047 */
  width: 280px;
  height: 176px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const SignInInput = styled.input`
  /* Frame 2043683045 */
  width: 280px;
  height: 52px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 16px 18px 16px 18px;

  box-sizing: border-box;
  border: 1px solid rgba(208, 206, 206, 1);
  border-radius: 8px;

  color: rgba(208, 206, 206, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const SignInButtonBlock = styled.div`
  /* Frame 2043683042 */
  width: 280px;
  height: 114px;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const SignInButton = styled.button`
  /* Frame 2043683048 */
  width: 280px;
  height: 52px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 26px 16px 26px;

  border-radius: 46px;
  background: rgba(188, 236, 48, 1);

  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  transition:
    transform 0.6s ease;
  &:hover {
    background: rgba(195, 234, 166, 1);
    transform: scale(1.05);
  }
`;

export const SignInButtonSignIn = styled.button`
  /* Frame 2043683049 */
  width: 280px;
  height: 52px;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 26px 16px 26px;

  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 46px;
  background: rgba(255, 255, 255, 1);

  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  transition:
    transform 0.6s ease;
  &:hover {
    background: rgba(247, 247, 247, 1);
    transform: scale(1.05);
  }
`;
