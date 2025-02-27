import { styled } from "styled-components";

import { Page } from "@ui/page/page";
import { Section } from "@ui/section/section";
import { Table } from "@ui/table/table";
import { FlexRow } from "@ui/flex/flex";
import { OpenInANewTab } from "@ui/open-in-a-new-tab";

import MapSogangSvg from "./assets/map-sogang.svg";
import MapKSvg from "./assets/map-k.svg";
import LabK512Image from "./assets/labk512.jpg";
import { useOrganizerDataContext } from "../../contexts/organizer-data-context";
import constants from "../../contexts/assets/constants";

const HeroImage = styled.img`
  width: 100%;
  margin: 32px 0;
`;
const OrganizerTable = styled(Table)``;
const _ContactPage = ({ className }: { className?: string }) => {
  const { latest: latestOrganizerData } = useOrganizerDataContext();
  return (
    <Page className={className}>
      <Page.Title description="서강대학교 학부생이라면 누구나 함께할 수 있습니다.">
        가입 및 문의
      </Page.Title>
      <HeroImage src={LabK512Image} alt="K512 Lab" />
      <Page.Body>
        <Section>
          <Section.Title>가입</Section.Title>
          <Section.Body>
            3월 3일까지 모집을 진행합니다. 자세한 내용은{" "}
            <OpenInANewTab href="https://forms.gle/ACr3NfLfHwQ8BrH38">
              구글 폼
            </OpenInANewTab>
            을 확인해 주세요.
          </Section.Body>
        </Section>
        <Section>
          <Section.Title>문의</Section.Title>
          <Section.Body>
            질문은 언제나 환영합니다!
            <br />
            학회 관련, 프로그래밍 대회 관련, ICPC 관련해 궁금한 점이 있으시다면
            언제든 {constants.emailAddress} 혹은{" "}
            <OpenInANewTab
              href={constants.kakaoPfUrl}
              style={{ wordBreak: "keep-all" }}
            >
              카카오톡 플러스친구
            </OpenInANewTab>
            로 문의 부탁드립니다.
          </Section.Body>
        </Section>
        <Section>
          <Section.Title>랩실 위치</Section.Title>
          <Section.Body>
            <p>
              K512 랩실은{" "}
              <OpenInANewTab href="https://www.google.com/maps/place/%EC%84%9C%EA%B0%95%EB%8C%80%ED%95%99%EA%B5%90+%EA%B9%80%EB%8C%80%EA%B1%B4%EA%B4%80/@37.5500361,126.940057,15z/data=!4m5!3m4!1s0x0:0x64853caa3a841c2b!8m2!3d37.5500361!4d126.940057">
                서강대학교 김대건관
              </OpenInANewTab>{" "}
              5층 중간 즈음에 위치하고 있습니다.
            </p>
            <FlexRow flexWrap="wrap">
              <img src={MapSogangSvg} alt="서강대학교 약도" />
              <img src={MapKSvg} alt="K관 약도" />
            </FlexRow>
          </Section.Body>
        </Section>

        <Section>
          <Section.Title>회장단</Section.Title>
          <Section.Body>
            <Table.Caption>{latestOrganizerData.year}</Table.Caption>
            <Table.Wrapper>
              <OrganizerTable>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      {latestOrganizerData.president.name}
                    </Table.Cell>
                    <Table.Cell>학회장</Table.Cell>
                    <Table.Cell>
                      {latestOrganizerData.president.email}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      {latestOrganizerData.vicePresident?.name}
                    </Table.Cell>
                    <Table.Cell>부학회장</Table.Cell>
                    <Table.Cell>
                      {latestOrganizerData.vicePresident?.email}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </OrganizerTable>
            </Table.Wrapper>
          </Section.Body>
        </Section>
      </Page.Body>
    </Page>
  );
};
export const ContactPage = styled(_ContactPage)`
  ${OrganizerTable} {
    margin-top: 16px;
  }
`;
