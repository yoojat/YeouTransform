import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Dropdown from "react-dropdown";
import ImageGallery from "react-image-gallery";
import MyMapComponent from "../../components/MyMapComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Preview = styled.section`
  padding-top: 80px;
  background-color: ${props => props.theme.grayColor};
  margin-bottom:100px;
  @media (min-width: 1020px) {
    position: relative;
    height: 450px;
    background: url("${props => props.mainImg}") no-repeat center / 100%
      auto;
      margin-bottom:500px;
    /* background: url("/static/img/branch/PreviewBg.jpg") no-repeat center / 100%
      auto; */
  }
`;
const PreviewText = styled.div`
  position: relative;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 30px;
  @media (min-width: 1020px) {
    position: absolute;
    top: 110px;
    left: 50%;
    width: 490px;
    margin-bottom: 200px;
    color: #fff;
    font-size: 1.1em;
  }
`;
const Name = styled.h1`
  font-family: "yg-jalnan", "Noto Sans KR", sans-serif;
  line-height: 2em;
  margin-bottom: 15px;
  @media (min-width: 1020px) {
    margin-bottom: 30px;
  }
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.5em;
`;
const GoBtn = styled.span`
  margin-top: 20px;
  display: block;
  width: 128px;
  height: 30px;
  border-radius: 30px;
  font-size: 1.2em;
  line-height: 33px;
  text-align: center;
  color: #fff;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  background-color: ${props => props.theme.blueColor};
  border: none;
  a {
    color: white;
    &:hover {
      color: #f1c40f;
    }
  }
  @media (min-width: 1020px) {
    margin-top: 36px;
  }
`;

const Service = styled.section`
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 50px;
  text-align: center;
  @media (min-width: 1020px) {
    width: 1000px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Title = styled.h1`
  color: ${props => props.theme.blackColor};
`;
const ServiceLists = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  @media (min-width: 1020px) {
    justify-content: left;
  }
`;
const ServiceList = styled.li`
  flex-basis: 48%;
  margin-right: 10px;
  padding-top: 4px;
  border-bottom: 1px solid #e1e1e1;
  font-size: 1.2em;
  line-height: 2.2em;
  &:nth-child(even) {
    margin-right: 0;
  }
  &:nth-child(-n + 2) {
    border-top: 1px solid #e1e1e1;
  }
  @media (min-width: 1020px) {
    flex-basis: 24.2%;
    &:nth-child(even) {
      margin-right: 10px;
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
    &:nth-child(-n + 4) {
      border-top: 1px solid #e1e1e1;
    }
  }
`;

const Location = styled.section`
  width: 100%;
  padding-top: 50px;
  text-align: center;
  background-color: ${props => props.theme.grayColor};
`;
const Address = styled.p`
  font-size: 1.2em;
  line-height: 3em;
`;
const Icon = styled.i`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  margin-right: 10px;
  vertical-align: bottom;
  background: url("/static/img/branch/KakaoLogo.png") no-repeat center / 100%
    auto;
`;
const KakaoPlusBtn = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #3b1e1e;
  font-size: 1.2em;
  border-radius: 20px;
  background-color: #ffe800;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
`;
const Map = styled.div`
  display: block;
  @media (min-width: 1020px) {
    /* padding-top: 30; */
  }
`;

const DropdownExtended = styled(Dropdown)`
  position: absolute;
  top: 0;
  right: 0;
  /* padding: 0.9em 2.6em 0.7em 1.2em; */
  text-align: center;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  font-size: 13px;
  background-color: #fff;
  /* background: url("/static/img/branch/SelectBoxArrow.png") no-repeat 93% 52% /
    auto 30%; */
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-ms-expand {
    display: none;
  }
  @media (min-width: 1020px) {
    background-color: #fff;
  }
`;

const ImgContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1020px) {
    top: 400px;
  }
  position: relative;
`;

export default ({ branchOptions, onOptionChange, selBranch, branchImgs }) => (
  <>
    {/* 타이틀 표시 */}
    <Head>
      <title> {selBranch && selBranch.name} | BlueDot Lounge</title>
    </Head>
    {/* 시작 */}
    <Header />
    <Preview mainImg={selBranch.mainImg}>
      <PreviewText>
        <Name>{selBranch && selBranch.name}</Name>
        {branchOptions && (
          <DropdownExtended
            options={branchOptions}
            onChange={onOptionChange}
            value={selBranch && selBranch.id}
            placeholder="지점을 선택해주세요"
          />
        )}

        <Text>{selBranch && selBranch.description}</Text>
        <GoBtn>
          <Link href={"http://bluedotlounge.kr"}>
            <a target="_blank">이용하러 가기</a>
          </Link>
        </GoBtn>
      </PreviewText>
      <ImgContainer>
        <ImageGallery items={branchImgs} showFullscreenButton={false} />
      </ImgContainer>
    </Preview>
    <Service>
      <Title>제공되는 서비스</Title>
      <ServiceLists>
        <ServiceList>싱글 라운지</ServiceList>
        <ServiceList>포커스 라운지</ServiceList>
        <ServiceList>프리 라운지</ServiceList>
        <ServiceList>푸드 라운지</ServiceList>
        <ServiceList>365일 24시간 이용</ServiceList>
        <ServiceList>냉난방</ServiceList>
        <ServiceList>5G 와이파이</ServiceList>
        <ServiceList>백색소음기</ServiceList>
        <ServiceList>공기청정기</ServiceList>
        <ServiceList>스탠드 책상</ServiceList>
        <ServiceList>개별 2구 멀티탭</ServiceList>
        <ServiceList>개별 스탠드</ServiceList>
        <ServiceList>복합기</ServiceList>
        <ServiceList>원두커피</ServiceList>
        <ServiceList>냉장고</ServiceList>
        <ServiceList>전자레인지</ServiceList>
        <ServiceList>제빙기</ServiceList>
        <ServiceList>택배 보관 장소</ServiceList>
      </ServiceLists>
    </Service>
    <Location>
      <Title>위치</Title>
      <Address>{selBranch.address}</Address>
      <div>
        <Link href={selBranch.kakao}>
          <a target="_blank">
            <KakaoPlusBtn>
              <Icon />
              문의하러 가기
            </KakaoPlusBtn>
          </a>
        </Link>
        <Map>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZWDZtnTPgzPRY8DqpYqVYJ2pGQMec7gM&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lat={selBranch.lat}
            lng={selBranch.lng}
          />{" "}
        </Map>
      </div>
    </Location>
    <Footer />
  </>
);
