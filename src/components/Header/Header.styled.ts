import styled from 'styled-components';

export const HeaderBackground = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  width: 220px;
  height: 35px;

  a {
    display: flex;
    align-items: center;
  }

  img {
    /* logo */
    width: 220px;
    height: 35px;
    display: block;
  }
`;

export const HeaderParag = styled.p`
  width: 327px;
  height: 20px;
  padding-top: 15px;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const HeaderButton = styled.button`
  width: 103px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8;
  padding: 16px 26px 16px 26px;

  border-radius: 46px;
  background: rgba(188, 236, 48, 1);

  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  border: none;

  transition:
    transform 0.6s ease;
  &:hover {
    background: rgba(195, 234, 166, 1);
    transform: scale(1.05);
  }
`;

export const HeaderAuthBlock = styled.div`
  position: absolute;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderUserName = styled.p`
  padding-right: 12px;
  color: rgba(0, 0, 0, 1);

  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: right;
`;

export const HeaderUserButton = styled.a``;

export const HeaderUserLogo = styled.div`
  padding-right: 16px;
`;
