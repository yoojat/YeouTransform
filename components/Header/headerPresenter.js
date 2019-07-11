import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  background-color: white;
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 800;
  border-bottom: 1px solid #f0f0f0;
`;

const HeaderIn = styled.div`
  @media (min-width: 1020px) {
    position: relative;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const FixedItems = styled.div`
  position: relative;
  /* z-index: 800; */
`;

// effect: OpenMenu 클릭 시, Logo 이미지변경, GoBtn 컬러 변겅, OpenMenu 닫기아이콘으로 이미지 변경
const Logo = styled.div`
  position: relative;
  display: inline-block;
  width: 70px;
  margin-right: 10px;
  height: 100px;
  margin-left: 16px;
  text-indent: -9999px;
  background-image: url("/static/img/yeoun/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: 125px auto; */

  @media (min-width: 1020px) {
    margin-left: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LogoText = styled.div`
  font-size: 14px;
`;

const GoBtn = styled.div`
  position: Absolute;
  top: 16px;
  right: 54px;
  width: 100px;
  height: 24px;
  line-height: 28px;
  text-align: center;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  color: #fff;
  font-size: 12px;
  border-radius: 30px;
  background-color: #4071ff;
  @media (min-width: 1020px) {
    right: 90px;
  }
`;

// SideLeft 시작. 내용 보려면 display: none;을 지우세요!
const SideLeft = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  width: 100%;
  height: 100%;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  text-align: center;
  font-size: 18px;
  background-color: #4071ff;
`;

const SNS = styled.ul`
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SNSIcon = styled.li`
  display: block;
  text-indent: -9999px;
  background-repeat: no-repeat;
`;
const SNSBlog = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/static/img/header/SNSBlogWhite.png");
  background-size: 40px auto;
`;
const SNSCacao = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/static/img/header/SNSCacaoWhite.png");
  background-size: 40px auto;
`;

const Gnb = styled.ul`
  display: none;
  @media (min-width: 1020px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 204px;
    height: 24px;
    display: flex;
    flex-direction: row;
    li {
      cursor: pointer;
      a:hover {
        color: #4071ff;
      }
    }
  }
`;
const GnbD1 = styled.div`
  display: block;
  width: 100px;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  color: ${props => props.theme.blackColor};
  &:hover {
    color: #4071ff;
  }
`;

const GnbD1Extended = styled(GnbD1)``;
const D2 = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  left: 250px;
  width: 194px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #1b1c20;
  border-radius: 3%;
  background-color: #fff;
`;
const PCSubUl = styled.ul`
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
const PCBranch = styled.div`
  display: block;
  width: 90px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  color: ${props => props.theme.blackColor};
`;

const PcSNS = styled.ul`
  /* display: none; */
  /* @media (min-width: 1020px) { */
  position: absolute;
  top: 16px;
  right: 0;
  width: 100px;
  height: 24px;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 30px;
  margin-top: 20px;
  /* } */
`;
const PcSNSIcon = styled.li`
  display: block;
  margin-left: 10px;
  text-indent: -9999px;
  background-repeat: no-repeat;
`;
const PcSNSBlog = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/static/img/header/SNSBlogBlack.png");
  background-size: 24px auto;
`;
const PcSNSCacao = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/static/img/header/SNSCacaoBlack.png");
  background-size: 24px auto;
`;

export default () => (
  <Header>
    <HeaderIn>
      <FixedItems>
        <Link href={"/"}>
          <a>
            <LogoContainer>
              <Logo />
              <LogoText>극단 여운 - 변신</LogoText>
            </LogoContainer>
          </a>
        </Link>
      </FixedItems>
      <SideLeft>
        <SNS>
          <SNSIcon>
            <Link
              href={"https://m.blog.naver.com/PostList.nhn?blogId=dudns0600"}
            >
              <a target="_blank">
                <SNSBlog>블로그 가기</SNSBlog>
              </a>
            </Link>
          </SNSIcon>
          <SNSIcon>
            <Link href={"https://pf.kakao.com/_mgCRj"}>
              <a target="_blank">
                <SNSCacao>카카오플러스친구로 가기</SNSCacao>
              </a>
            </Link>
          </SNSIcon>
        </SNS>
      </SideLeft>

      <PcSNS>
        <PcSNSIcon>
          <Link href={"https://m.blog.naver.com/PostList.nhn?blogId=dudns0600"}>
            <a target="_blank">
              <PcSNSBlog>블로그 가기</PcSNSBlog>
            </a>
          </Link>
        </PcSNSIcon>
        <PcSNSIcon>
          <Link href={"https://pf.kakao.com/_mgCRj"}>
            <a target="_blank">
              <PcSNSCacao>카카오플러스친구로 가기</PcSNSCacao>
            </a>
          </Link>
        </PcSNSIcon>
      </PcSNS>
    </HeaderIn>
  </Header>
);
