import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
// import ImageGallery from "react-image-gallery";
import MyMapComponent from "../../components/MyMapComponent";

const SIGN_UP = "SIGN_UP";
const MEMBERSHIP_PAY = "MEMBERSHIP_PAY";
const ASSIGN_SEAT = "ASSIGN_SEAT";
const MAN1 = "MAN1";
const MAN2 = "MAN2";
const WOMAN1 = "WOMAN1";
const WOMAN2 = "WOMAN2";

export default ({
  onHumanClick,
  man1Changed,
  man2Changed,
  woman1Changed,
  woman2Changed
}) => (
  <div>
    {/* 타이틀 표시 */}
    <Head>
      <title>홈 | 극단 여운 - 변신</title>
    </Head>
    {/* 시작 */}
    <Container>
      <Main>
        <MainIntro>
          <MainImgTop>
            <MainImgTopM src="/static/img/yeoun/poster.png" alt="" />
          </MainImgTop>
        </MainIntro>

        <TransformedContainer2>
          <Link href={"#"}>
            <a
              onClick={() => {
                e.preventDefault();
                onHumanClick(MAN1);
              }}
            >
              <ToBeTransformed
                show={!man1Changed}
                src={"/static/img/yeoun/man1.png"}
              />
              <Transformed
                show={man1Changed}
                src={"/static/img/yeoun/animal-1295183_640.png"}
              />
            </a>
          </Link>
        </TransformedContainer2>
        <TransformedContainer>
          <Link href={"#"}>
            <a
              onClick={(e) => {
                e.preventDefault();
                onHumanClick(WOMAN1);
              }}
            >
              <ToBeTransformed
                show={!woman1Changed}
                src={"/static/img/yeoun/woman1.png"}
              />
              <Transformed
                show={woman1Changed}
                src={"/static/img/yeoun/the-cup-2360104_640.png"}
              />
            </a>
          </Link>
        </TransformedContainer>
        <TransformedContainer3>
          <Link href={"#"}>
            <a
              onClick={(e) => {
                e.preventDefault();
                onHumanClick(WOMAN2);
              }}
            >
              <ToBeTransformed
                show={!woman2Changed}
                src={"/static/img/yeoun/woman2.png"}
              />
              <Transformed
                show={woman2Changed}
                src={"/static/img/yeoun/wooden-rocking-chair-4321820_640.png"}
              />
            </a>
          </Link>
        </TransformedContainer3>
        <TransformedContainer4>
          <Link href={"#"}>
            <a
              onClick={(e) => {
                e.preventDefault();
                onHumanClick(MAN2);
              }}
            >
              <ToBeTransformed
                show={!man2Changed}
                src={"/static/img/yeoun/business-man-295169_640.png"}
              />
              <Transformed
                show={man2Changed}
                src={"/static/img/yeoun/pocket-watch-2531472_640.png"}
              />
            </a>
          </Link>
        </TransformedContainer4>
      </Main>
      {/* Main 끝 */}

      <Service>
        <Title>
          <h3>당신이라면 뭘로 변신했을까</h3>
          <h1>연극 '변신'보러 Come On!</h1>
        </Title>
      </Service>
      <InfoContainr>
        <InfoRow>일시 : 19년 7월 27일(토) 오후 3시, 오후6시</InfoRow>
        <InfoRow>장소 : 지아트 센터</InfoRow>
        <InfoRow>주소 : 부산 남구 진남로 7-3 지하1층</InfoRow>
        <InfoRow>
          <Link href={"http://naver.me/GwmKaQOq"}>
            <a target="_blank">
              <MapBtn>지도 보기</MapBtn>
            </a>
          </Link>
        </InfoRow>
        <InfoRow>티켓가격 : 10000원</InfoRow>
        <InfoRow>예약문의 : 010-6393-3077</InfoRow>
      </InfoContainr>
      <QuotationBtns>
        <li>
          <Link href={"https://forms.gle/oS2QGgLPp5EBfDNu7"}>
            <a target="_blank">
              <QuotationBtn>예매하기</QuotationBtn>
            </a>
          </Link>
        </li>
        {/* <li>
              <Link href={"/main"}>
                <a target="_blank">
                  <QuotationBtn>ㄷ 다운받기</QuotationBtn>
                </a>
              </Link>
            </li> */}
      </QuotationBtns>

      <Map>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZWDZtnTPgzPRY8DqpYqVYJ2pGQMec7gM&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lat={35.135598}
          lng={129.091664}
        />{" "}
      </Map>

      <Review>
        <ReviewIn>
          <Title>
            <h3>극단 여운의 생생한 후기</h3>
            <h1>이런 변신은 없었다</h1>
          </Title>
          <Reviews>
            <ReviewItem>
              <ReviewerMan />
              <p>변신남 / *** 님</p>
              <ReviewText>집에 가기 무서워요</ReviewText>
            </ReviewItem>
            <ReviewItem>
              <ReviewerTree />
              <p>변신한 아빠의 딸 / *** 님</p>
              <ReviewText>아빠 이제 잘해줄게요 엄마 국 좀 더 줘요</ReviewText>
            </ReviewItem>
            <ReviewItem>
              <ReviewerStone />
              <p>변신돌 / *** 님</p>
              <ReviewText>저도 돌로 변신할 줄은 몰랐어요 </ReviewText>
            </ReviewItem>
            <ReviewItem>
              <ReviewerCup />
              <p>컵을 떨어뜨린 여자 / *** 님</p>
              <ReviewText>일부러 떨어뜨린거에요</ReviewText>
            </ReviewItem>
          </Reviews>
        </ReviewIn>
      </Review>
      {/* Review 끝 */}
      {/* <Quotation>
        <QuotationText>
          <QuotationMarkL />
          <h3>
            당신에게 주어진 시간은 제한적입니다.
            <br />
            그 시간을 헛되이 버리지 마세요.
            <br />
            그리고 당신의 마음과 직관을 따를 수 있는
            <br />
            용기를 가지시길 바랍니다.
          </h3>
          <QuotationMarkR />
        </QuotationText>
        <QuotationImg />
        <QuotationBtns>
          <li>
            <Link href={"http://bluedotlounge.kr"}>
              <a target="_blank">
                <QuotationBtn>이용하러 가기</QuotationBtn>
              </a>
            </Link>
          </li>
        </QuotationBtns>
      </Quotation> */}
      {/* Quotation 끝 */}
      {/* <KakaoPlus>
        <KakaoPlusIn>
          <KakaoPlusTitle>
            <h3>블루닷라운지는 소통 빼면 시체...</h3>
            <h1>카톡 플친 문의하기</h1>
          </KakaoPlusTitle>
          <KakaoPlusImg />
          <div>
            <Link href={"https://pf.kakao.com/_xmXxiru"}>
              <a target="_blank">
                <KakaoPlusBtn>문의하러 가기</KakaoPlusBtn>
              </a>
            </Link>
          </div>
        </KakaoPlusIn>
      </KakaoPlus> */}
      {/* KakaoPlus 끝 */}
      <Worker>
        {/* <Title>
          <h3>성장하는 블닷워커들의</h3>
          <h1>슬기로운 블닷생활</h1>
        </Title> */}
        {/* <WorkerImgs>
          <ImgContainer>
            <ImageGallery
              items={[
                {
                  original: "/static/img/main/WorkerImg1.jpg",
                  thumbnail: "/static/img/main/WorkerImg1.jpg"
                },
                {
                  original: "/static/img/main/WorkerImg2.jpg",
                  thumbnail: "/static/img/main/WorkerImg2.jpg"
                },
                {
                  original: "/static/img/main/WorkerImg3.jpg",
                  thumbnail: "/static/img/main/WorkerImg3.jpg"
                },
                {
                  original: "/static/img/main/WorkerImg4.jpg",
                  thumbnail: "/static/img/main/WorkerImg4.jpg"
                }
              ]}
              showFullscreenButton={false}
            />
          </ImgContainer>
        </WorkerImgs> */}
        {/* <WorkerImgs>
            <WorkerImg>
              <Link
                href={
                  "https://www.instagram.com/p/BsZgs9ynIO1/?utm_source=ig_web_copy_link"
                }
              >
                <a target="_blank">
                  <WorkerImg1
                    src="/static/img/main/WorkerImg1.jpg"
                    alt="장인정신으로 한땀한땀"
                  />
                </a>
              </Link>
            </WorkerImg>
            <WorkerImg>
              <Link
                href={
                  "https://www.instagram.com/p/BxUJHU9BtMQ/?utm_source=ig_web_copy_link"
                }
              >
                <a target="_blank">
                  <WorkerImg2
                    src="/static/img/main/WorkerImg2.jpg"
                    alt="열일하는 송군"
                  />
                </a>
              </Link>
            </WorkerImg>
            <WorkerImg>
              <Link
                href={
                  "https://www.instagram.com/p/Bw9pmH3neOv/?utm_source=ig_web_copy_link"
                }
              >
                <a target="_blank">
                  <WorkerImg3
                    src="/static/img/main/WorkerImg3.jpg"
                    alt="마무리 후에 찰칵"
                  />
                </a>
              </Link>
            </WorkerImg>
            <WorkerImg>
              <Link
                href={
                  "https://www.instagram.com/p/Bu8Q9nJho9s/?utm_source=ig_web_copy_link"
                }
              >
                <a target="_blank">
                  <WorkerImg4
                    src="/static/img/main/WorkerImg4.jpg"
                    alt="우산 기부했어요."
                  />
                </a>
              </Link>
            </WorkerImg>
          </WorkerImgs> */}
        {/* <WorkerMoreBtn>더보기</WorkerMoreBtn> */}
      </Worker>
      {/* Worker 끝 */}
      {/* <Social>
        <Title>
          <h3>이왕이면 가치있게!</h3>
          <h1>사회적 기업, 블루닷라운지</h1>
        </Title>
        <SocialCotents>
          <SocialText>
            블루닷라운지는
            <br />
            사회적 약자 계층 무료 이용 지원,
            <br />
            청장년을 위한 일자리 창출 등<br />
            모두가 잘 사는 세상을 만들기 위해
            <br />
            노력하고 있습니다.
          </SocialText>
          <SocialImg />
        </SocialCotents>
      </Social> */}
    </Container>
  </div>
);

const Container = styled.div`
  text-align: center;
`;

// section 1 - Main 시작
const Main = styled.section`
  position: relative;
`;
const Title = styled.div``;
const MainIntro = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  justify-content: space-between;
  align-items: center;
  /* @media (min-width: 1020px) {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  } */
`;
// 전등 이미지
const MainImgTop = styled.div`
  width: 100%;
  height: auto;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  /* @media (min-width: 1020px) {
    height: 24%;
    max-width: 700px;
  } */
`;
const MainImgTopM = styled.img`
  width: 100%;
  margin-top: 15px;
  max-width: 450px;
  /* @media (min-width: 1020px) {
    display: none;
  } */
`;
const MainImgTopPC = styled.img`
  display: none;
  /* @media (min-width: 1020px) {
    display: block;
    width: 100%;
  } */
`;
const MainMiddle = styled.div`
  width: 100%;
  height: auto;
  background: url("/static/img/main/MainSlogan.jpg") no-repeat center / cover;
  margin: 0;
  flex-basis: 30vh;
  max-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// 메인 슬로건
const MainImgSlogan = styled.img`
  width: 32%;
  height: auto;
  max-width: 130px;
  margin-bottom: 3em;
  @media (min-width: 1020px) {
    width: 13%;
  }
`;
// 메인 로고
const MainLogo = styled.h1`
  margin-bottom: 1.2em;
  width: 100%;
  height: 2.5em;
  text-indent: -9999px;
  background: url("/static/img/main/MainLogo.png") no-repeat center / contain;
`;
// 메인 바로가기 버튼들
const MainBtns = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5em;
  width: 22em;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  color: ${props => props.theme.blueColor};
  @media (min-width: 1020px) {
  }
`;
const MainBtn = styled.div`
  display: block;
  width: 9em;
  height: 2em;
  border-radius: 1em;
  font-size: 1.1em;
  line-height: 2.2em;
  text-align: center;
  color: #fff;
  background-color: ${props => props.theme.blueColor};
`;
// 이용자들 이미지
const MainImgBottom = styled.div`
  width: 100%;
  max-width: 800px;
  /* @media (min-width: 1020px) {
    max-width: 100%;
  } */
`;
const MainImgBottomM = styled.img`
  width: 100%;
  margin-bottom: 50px;
  /* @media (min-width: 1020px) {
    display: none;
  } */
`;
const MainImgBottomPC = styled.img`
  display: none;
  @media (min-width: 1020px) {
    display: block;
    width: 100%;
  }
`;
/* change : 기획단계 교체 예정 (태영씨) */
const MainMv = styled.div`
  margin-top: 60px;
  height: 30%;
  background-color: ${props => props.theme.grayColor};
  padding-top: 40px;
  padding-bottom: 40px;
`;
// section 2 - Service 시작
const Service = styled.section`
  margin-top: 30px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 30px;
  @media (min-width: 1020px) {
    justify-content: center;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

const ServiceContents = styled.ul`
  margin-top: 40px;
  @media (min-width: 1020px) {
    margin-top: 100px;
  }
`;
const ServiceContent1 = styled.li`
  height: auto;
  font-size: 14px;
  @media (min-width: 1020px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ServiceContent2 = styled.li`
  height: auto;
  font-size: 14px;
  @media (min-width: 1020px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ServiceContent3 = styled.li`
  height: auto;
  font-size: 14px;
  @media (min-width: 1020px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ServiceContent4 = styled.li`
  height: auto;
  font-size: 14px;
  @media (min-width: 1020px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ServiceContent1Img = styled.div`
  display: block;
  height: 200px;
  background: url("/static/img/main/ServiceContent1.png") no-repeat center /
    auto 100%;
  @media (min-width: 1020px) {
    display: block;
    width: 60%;
    height: 250px;
    margin-right: 30px;
    background-position: right;
    background-size: auto 100%;
  }
`;
const ServiceContent2Img = styled.div`
  display: block;
  height: 220px;
  background: url("/static/img/main/ServiceContent2.png") no-repeat center /
    auto 100%;
  @media (min-width: 1020px) {
    display: block;
    width: 60%;
    height: 250px;
    margin-right: 30px;
    background-position: right;
    background-size: auto 100%;
  }
`;
const ServiceContent3Img = styled.div`
  display: block;
  height: 220px;
  background: url("/static/img/main/ServiceContent3.png") no-repeat center /
    auto 100%;
  @media (min-width: 1020px) {
    display: block;
    width: 60%;
    height: 250px;
    margin-right: 30px;
    background-position: right;
    background-size: auto 100%;
  }
`;
const ServiceContent4Img = styled.div`
  display: block;
  height: 220px;
  background: url("/static/img/main/ServiceContent4.png") no-repeat center /
    auto 85%;
  @media (min-width: 1020px) {
    display: block;
    width: 60%;
    height: 250px;
    margin-right: 30px;
    background-position: right;
    background-size: auto 100%;
  }
`;
const ServiceText = styled.div`
  @media (min-width: 1020px) {
    width: 50%;
    text-align: left;
    padding-left: 30px;
  }
`;
const H3 = styled.h3`
  @media (min-width: 1020px) {
    font-size: 20px;
  }
`;
const P = styled.p`
  @media (min-width: 1020px) {
    margin-top: 20px;
    font-size: 18px;
    line-height: 24px;
  }
`;

// section3 - Lounge 시작
// effect: LoungeBtn1을 클릭하면
// 1. LoungeBtn1 : color: ${props => props.theme.blueColor} (블루컬러로 바뀜.)
// 2. 바로 아래에 LoungeContent1이 나타남.
// LoungeBtn1~4, LoungeContent1~4 각 번호별로 짝지어서 동일한 효과.
// LoungeContent1이 기본으로 나타나 있고, 나머지 LoungeContent들은 display: none; 처리해둠.
const Lounge = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.grayColor};
`;
const LoungeIn = styled.div`
  /* height: 100vh; */
  margin-left: 16px;
  margin-right: 16px;
  @media (min-width: 1020px) {
    justify-content: center;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const LoungeContents = styled.ul`
  position: relative;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-bottom: 64%;
  @media (min-width: 414px) {
    margin-top: 50px;
    padding-bottom: 256px;
  }
  @media (min-width: 1020px) {
    margin-top: 50px;
    width: 70%;
    padding-bottom: 44.8%;
  }
`;
const LoungeContent1 = styled.li`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 256px;
  background-image: url("/static/img/main/LoungeContent1Img.jpg");
  background-repeat: no-repeat;
  background-size: auto 100%;
  @media (min-width: 1020px) {
    max-width: 100%;
    max-height: 100%;
  }
`;
const LoungeContent2 = styled.li`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 256px;
  background-image: url("/static/img/main/LoungeContent2Img.jpg");
  background-repeat: no-repeat;
  background-size: auto 100%;
  @media (min-width: 1020px) {
    max-width: 100%;
    max-height: 100%;
  }
`;
const LoungeContent3 = styled.li`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 256px;
  background-image: url("/static/img/main/LoungeContent3Img.jpg");
  background-repeat: no-repeat;
  background-size: auto 100%;
  @media (min-width: 1020px) {
    max-width: 100%;
    max-height: 100%;
  }
`;
const LoungeContent4 = styled.li`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 256px;
  background-image: url("/static/img/main/LoungeContent4Img.jpg");
  background-repeat: no-repeat;
  background-size: auto 100%;
  @media (min-width: 1020px) {
    max-width: 100%;
    max-height: 100%;
  }
`;
const LoungeContentText = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 6px;
  right: 0;
  left: 0;
  @media (min-width: 1020px) {
    bottom: 10px;
  }
`;
const LoungeContentTextP = styled.p`
  padding: 3px 10px 2px 10px;
  margin: 2px;
  border-radius: 20px;
  background-color: ${props => props.theme.grayColor};
  @media (min-width: 1020px) {
    padding: 9px 12px 4px 12px;
    margin: 6px;
    font-size: 16px;
  }
`;

// section 4 - Manual 시작
const Manual = styled.section`
  margin-top: 50px;
`;
const ManualBtns = styled.ul`
  display: flex;
  justify-content: center;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  color: ${props => props.theme.blueColor};
  font-size: 20px;
  line-height: 28px;
`;

const ManualImgs = styled.ul`
  position: relative;
  margin-top: 30px;
  width: 100%;
  height: 0;
  padding-bottom: 140%;
  @media (min-width: 768px) {
    padding-bottom: 50%;
  }
  @media (min-width: 1020px) {
    margin-top: 30px;
    padding-bottom: 500px;
  }
`;

const JoinImg = styled("li")`
  display: ${props =>
    (props.selUsageOption === SIGN_UP && "inherit") || "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/static/img/main/ManualJoinImg.gif") no-repeat center / auto
    100%;
  @media (min-width: 1020px) {
    height: 500px;
  }
`;

const PaymentImg = styled.li`
  display: ${props =>
    (props.selUsageOption === MEMBERSHIP_PAY && "inherit") || "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/static/img/main/ManualPaymentImg.gif") no-repeat center /
    auto 100%;
  @media (min-width: 1020px) {
    height: 500px;
  }
`;
const SeatImg = styled.li`
  display: ${props =>
    (props.selUsageOption === ASSIGN_SEAT && "inherit") || "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/static/img/main/ManualSeatImg.gif") no-repeat center / auto
    100%;
  @media (min-width: 1020px) {
    height: 500px;
  }
`;

// section 5 - Review 시작
const Review = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.grayColor};
`;
const ReviewIn = styled.div`
  /* height: 100vh; */
  margin-left: 16px;
  margin-right: 16px;
  @media (min-width: 1020px) {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Reviews = styled.div`
  margin-top: 20px;
  @media (min-width: 1020px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
  }
`;
// 이미지 교체 예정
const ReviewItem = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 13px 13px 13px 74px;
  text-align: left;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  background-color: #fff;
  @media (min-width: 1020px) {
    width: 400px;
    margin-top: 0;
  }
`;
const ReviewerWoman = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 100%;
  height: 100%;
  background: url("/static/img/main/ReviewerWoman.png") no-repeat 0 0 / 45px
    45px;
`;
const ReviewerMan = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 100%;
  height: 100%;
  background: url("/static/img/yeoun/boy-1299608_1280.png") no-repeat 0 0 / 45px
    45px;
`;

const ReviewerStone = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 100%;
  height: 100%;
  background: url("/static/img/yeoun/stone-henge-3801424_1280.jpg") no-repeat 0
    0 / 45px 45px;
`;

const ReviewerTree = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 100%;
  height: 100%;
  background: url("/static/img/yeoun/father-656734_1280.jpg") no-repeat 0 0 /
    45px 45px;
`;

const ReviewerCup = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 100%;
  height: 100%;
  background: url("/static/img/yeoun/woman-902214_1280.jpg") no-repeat 0 0 /
    45px 45px;
`;

const ReviewText = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 700;
`;

// section 6 - Quotation 시작
const Quotation = styled.section`
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 50px;
  @media (min-width: 1020px) {
    position: relative;
    width: 1000px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const QuotationText = styled.div`
  margin-top: 50px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1em;
  @media (min-width: 1020px) {
    position: absolute;
    top: 36px;
    left: 240px;
    margin-top: 0;
    height: 32%;
  }
`;
const QuotationMarkL = styled.p`
  display: block;
  width: 10px;
  background: url("/static/img/main/QuotationMarkL.png") no-repeat top / 100%
    auto;
`;
const QuotationMarkR = styled.p`
  display: block;
  width: 10px;
  background: url("/static/img/main/QuotationMarkR.png") no-repeat bottom / 100%
    auto;
`;
// 이미지 교체 예정
const QuotationImg = styled.p`
  display: block;
  width: 100%;
  height: 300px;
  background: url("/static/img/main/QuotationImg.png") no-repeat center / auto
    70%;
  @media (min-width: 1020px) {
    background-position: 580px 0px;
    background-size: auto 80%;
  }
`;
const QuotationBtns = styled.ul`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 290px;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  color: ${props => props.theme.blueColor};
  margin-bottom: 30px;
`;

const MapBtn = styled.div`
  display: block;
  width: 128px;
  height: 30px;
  border-radius: 30px;
  font-size: 14px;
  line-height: 34px;
  text-align: center;
  color: #fff;
  background-color: #03cf5d;
  margin-bottom: 15px;
`;
const QuotationBtn = styled.div`
  display: block;
  width: 128px;
  height: 30px;
  border-radius: 30px;
  font-size: 14px;
  line-height: 34px;
  text-align: center;
  color: #fff;
  background-color: ${props => props.theme.blueColor};
`;

// section 7 - KakaoPlus 시작
const KakaoPlus = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.grayColor};
`;
const KakaoPlusIn = styled.div`
  /* height: 100vh; */
  margin-left: 16px;
  margin-right: 16px;
  @media (min-width: 1020px) {
    position: relative;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const KakaoPlusTitle = styled.div`
  @media (min-width: 1020px) {
    position: absolute;
    top: 50px;
    left: 270px;
  }
`;
// 이미지 교체 예정
const KakaoPlusImg = styled.p`
  display: block;
  width: 100%;
  height: 220px;
  margin-top: 30px;
  background-image: url("/static/img/main/KakaoPlusImg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  @media (min-width: 1020px) {
    background-position: 500px 0px;
    background-size: auto 100%;
  }
`;
const KakaoPlusBtn = styled.p`
  display: block;
  width: 114px;
  height: 30px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  border-radius: 30px;
  font-size: 14px;
  line-height: 34px;
  text-align: center;
  color: #3c1e1e;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  background: #ffe800 url("/static/img/main/KakaoPlusBtn.png") no-repeat left /
    auto 100%;
  @media (min-width: 1020px) {
    position: absolute;
    top: 120px;
    left: 300px;
    margin-top: 0;
    /* height: 36%; */
  }
`;
// section 8 - Worker 시작
const Worker = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  @media (min-width: 1020px) {
    position: relative;
    width: 1000px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const WorkerImgs = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1020px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: inherit;
  }
`;
const WorkerImg = styled.div`
  width: 90%;
  max-width: 400px;
  @media (min-width: 1020px) {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
const WorkerImg1 = styled.img`
  width: 100%;
  margin-bottom: 5px;
`;
const WorkerImg2 = styled.img`
  width: 100%;
  margin-bottom: 5px;
`;
const WorkerImg3 = styled.img`
  width: 100%;
  margin-bottom: 5px;
`;
const WorkerImg4 = styled.img`
  width: 100%;
`;
const WorkerMoreBtn = styled.p`
  display: block;
  width: 128px;
  height: 30px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  font-size: 14px;
  line-height: 34px;
  text-align: center;
  color: #fff;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  background-color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

// section 9 - Social 시작
const Social = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.grayColor};
`;
const SocialCotents = styled.div`
  @media (min-width: 1020px) {
    position: relative;
    width: 1000px;
    height: 310px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
const SocialText = styled.p`
  margin-top: 30px;
  font-size: 15px;
  line-height: 22px;
  @media (min-width: 1020px) {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0;
    padding-top: 100px;
    width: 40%;
    font-size: 17px;
    line-height: 26px;
    text-align: left;
  }
`;
// 이미지 교체 예정
const SocialImg = styled.p`
  display: block;
  width: 100%;
  height: 170px;
  margin-top: 30px;
  background: url("/static/img/main/SocialImg.png") no-repeat center / auto 100%;
  @media (min-width: 1020px) {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0;
    width: 60%;
    height: 300px;
    background-position: 130px 100%;
    background-size: auto 85%;
  }
`;

// section 10 - Update 시작
// 정확히 어떤 업데이트를 할 건지 확실히 할 것.
const Update = styled.section`
  margin-top: 50px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 100px;
  @media (min-width: 1020px) {
    position: relative;
    width: 1000px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Updates = styled.ul`
  position: relative;
  /* padding-top: 100%; */
  overflow: hidden;
  width: 100%;
  text-indent: -9999px;
  @media (min-width: 1020px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0;
    height: 280px;
  }
`;
// 이미지 교체 예정
const Update1 = styled.li`
  margin-top: 30px;
  height: 270px;
  background-image: url("/static/img/main/Update1.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto 100%;
  @media (min-width: 1020px) {
    flex: 1;
    background-size: 74% auto;
  }
`;
const Update2 = styled.li`
  margin-top: 30px;
  height: 270px;
  background-image: url("/static/img/main/Update2.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto 100%;
  @media (min-width: 1020px) {
    position: relative;
    flex: 1;
    background-size: 74% auto;
  }
`;
const Update3 = styled.li`
  margin-top: 30px;
  height: 270px;
  background-image: url("/static/img/main/Update3.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto 100%;
  @media (min-width: 1020px) {
    position: relative;
    flex: 1;
    background-size: 74% auto;
  }
`;

const LogoText = styled.div`
  @keyframes blink {
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79% {
      color: #4071ff;
    }
    80% {
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: #4071ff;
      text-shadow: none;
    }
    83% {
      color: inherit;
      text-shadow: inherit;
    }
    92% {
      color: #4071ff;
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }
  text-align: center;
  /* width: 40%; */
  margin-bottom: 10px;
  /* height: 250px; */
  /* margin: auto; */

  b {
    font: 100 6.5vh "InkLipquid";
    color: #e1fbfb;
    text-shadow: 0 -40px 100px, 0 0 0.5px, 0 0 0.2em #30fee9, 0 0 0.2em #2dd0e3,
      0 5px 0.5em #005aff, 2px 4px 5px #1e00ff;
    span {
      animation: blink linear infinite 2s;
    }
  }
`;

const ImgContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  position: relative;
`;

const InfoContainr = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
`;
const InfoRow = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Map = styled.div`
  display: block;
  @media (min-width: 1020px) {
    /* padding-top: 30; */
  }
`;

const ToBeTransformed = styled.img`
  width: 50px;
  display: ${props => (props.show ? "inherit" : "none")};
`;

const Transformed = styled.img`
  width: 50px;
  display: ${props => (props.show ? "inherit" : "none")};
`;

const TransformedContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  @keyframes blink {
    10% {
      left: 5%;
      top: 5%;
    }
    20% {
      left: 10%;
      top: 10%;
    }
    30% {
      left: 15%;
      top: 15%;
    }
    40% {
      left: 20%;
      top: 25%;
    }
    50% {
      left: 30%;
      top: 35%;
    }
    60% {
      left: 25%;
      top: 30%;
    }
    70% {
      left: 20%;
      top: 25%;
    }
    80% {
      left: 10%;
      top: 15%;
    }
    90% {
      left: 5%;
      top: 5%;
    }
  }
  animation: blink linear infinite 10s;

  &:hover {
    cursor: pointer;
  }
`;

const TransformedContainer2 = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;

  @keyframes blink2 {
    10% {
      left: 50%;
      top: 40%;
    }
    20% {
      left: 40%;
      top: 35%;
    }
    30% {
      left: 50%;
      top: 50%;
    }
    40% {
      left: 60%;
      top: 65%;
    }
    50% {
      left: 70%;
      top: 65%;
    }
    60% {
      left: 65%;
      top: 60%;
    }
    70% {
      left: 50%;
      top: 55%;
    }
    80% {
      left: 39%;
      top: 45%;
    }
    90% {
      left: 30%;
      top: 30%;
    }
  }
  animation: blink2 linear infinite 10s;

  &:hover {
    cursor: pointer;
  }
`;

const TransformedContainer3 = styled.div`
  position: absolute;
  left: 90%;
  top: 90%;

  @keyframes blink3 {
    10% {
      left: 85%;
      top: 76%;
    }
    20% {
      left: 80%;
      top: 77%;
    }
    30% {
      left: 70%;
      top: 74%;
    }
    40% {
      left: 70%;
      top: 75%;
    }
    50% {
      left: 65%;
      top: 65%;
    }
    60% {
      left: 65%;
      top: 40%;
    }
    70% {
      left: 63%;
      top: 20%;
    }
    80% {
      left: 70%;
      top: 50%;
    }
    90% {
      left: 80%;
      top: 60%;
    }
  }
  animation: blink3 linear infinite 10s;

  &:hover {
    cursor: pointer;
  }
`;

const TransformedContainer4 = styled.div`
  position: absolute;
  left: 90%;
  top: 10%;

  @keyframes blink4 {
    10% {
      left: 85%;
      top: 10%;
    }
    20% {
      left: 80%;
      top: 11%;
    }
    30% {
      left: 70%;
      top: 12%;
    }
    40% {
      left: 60%;
      top: 14%;
    }
    50% {
      left: 50%;
      top: 20%;
    }
    60% {
      left: 45%;
      top: 25%;
    }
    70% {
      left: 63%;
      top: 40%;
    }
    80% {
      left: 70%;
      top: 50%;
    }
    90% {
      left: 80%;
      top: 20%;
    }
  }
  animation: blink4 linear infinite 15s;

  &:hover {
    cursor: pointer;
  }
`;
