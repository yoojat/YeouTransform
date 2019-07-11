import styled from "styled-components";
import Link from "next/link";

// 배경색상을 기준으로 파란색 배경의 좌(L), 흰색 배경의 우(R)로 나눠 작업하였음.
const TicketContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-left: 10px;
  margin-right: 10px;
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
const TicketL = styled.div`
  flex: 2.1;
  padding: 16px;
  border-top: 1px solid #dae4ff;
  border-left: 1px solid #dae4ff;
  border-bottom: 1px solid #dae4ff;
  border-radius: 5px 0 0 5px;
  background-color: ${props => props.theme.blueColor};
  background-image: url("/static/img/pricing/SimbolL.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 50px auto;
`;
const TextL = styled.ul`
  font-family: "yg-jalnan", "Noto Sans KR", sans-serif;
  color: #fff;
`;
const T1 = styled.li`
  font-size: 0.7em;
`;
const T1Span = styled.span`
  @media (max-width: 320px) {
    display: none;
  }
`;
const T2 = styled.li`
  padding-top: 14px;
  border-top: 6px solid #fff;
`;
const T3 = styled.li`
  margin-top: 6px;
  padding-bottom: 14px;
  border-bottom: 6px solid #fff;
  font-size: 20px;
`;
const T4 = styled.li`
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 14px;
  font-size: 18px;
  font-weight: 800;
`;
const Span = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 14px;
`;

const TicketR = styled.div`
  flex: 0.9;
  padding: 16px;
  border-top: 1px solid #dae4ff;
  border-right: 1px solid #dae4ff;
  border-bottom: 1px solid #dae4ff;
  border-radius: 0 5px 5px 0;
  background-color: #fff;
  background-image: url("/static/img/pricing/SimbolR.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 54px auto;
`;
const TextR = styled.ul`
  font-family: "yg-jalnan", "Noto Sans KR", sans-serif;
  text-align: center;
  color: ${props => props.theme.blueColor};
`;
const Price = styled.li`
  margin-top: 20px;
  padding-top: 14px;
  padding-bottom: 42px;
  font-size: 16px;
  border-top: 6px solid ${props => props.theme.blueColor};
  border-bottom: 6px solid ${props => props.theme.blueColor};
  background-image: url("/static/img/pricing/Barcode.png");
  background-repeat: no-repeat;
  background-position: center 75%;
  background-size: 98% auto;
`;
const JoinBtn = styled.p`
  margin-top: 34px;
  padding-top: 10px;
  padding-bottom: 7px;
  border-radius: 30px;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  font-size: 1em;
  color: #fff;
  background-color: ${props => props.theme.blueColor};
`;
const Ticket = ({ title, hour, day, price }) => (
  <TicketContainer>
    <TicketL>
      <TextL>
        <T1>
          BLUEDOT LOUNGE <T1Span>MEMBERSHIP</T1Span>
        </T1>
        <T2>블루닷라운지 멤버십</T2>
        <T3>{title}</T3>
        <T4>
          {hour && `${hour}시간 이용`}
          {day && `${day}일 이용`}
          <br />
          <Span>지점 사정에 따라 이용시간과 서비스가 다를 수 있습니다.</Span>
        </T4>
      </TextL>
    </TicketL>
    <TicketR>
      <TextR>
        <Price>{price}원</Price>
        <li>
          <Link href={"http://bluedotlounge.kr"}>
            <a target="_blank">
              <JoinBtn>등록하기</JoinBtn>
            </a>
          </Link>
        </li>
      </TextR>
    </TicketR>
  </TicketContainer>
);

export default Ticket;
