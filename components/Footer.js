import styled from "styled-components";
const Footer = styled.footer`
  padding: 30px 0;
  color: #b0b0b0;
  text-align: center;
  font-size: 13px;
`;
const FooterLogo = styled.p`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 80px;
  text-indent: -9999px;
  background-image: url("/static/img/yeoun/logo.png");
  background-repeat: no-repeat;
  /* background-size: 125px auto; */
  height: 125px;
`;
const FooterInfo = styled.p`
  margin-bottom: 4px;
`;
const FooterSpan = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

const BranchInfoContainer = styled.div``;

const BranchInfoItem = styled.div``;

export default () => (
  <Footer>
    <FooterLogo>극단 여운</FooterLogo>

    <p>©2019 KimTaeng All rights reserved.</p>
  </Footer>
);
