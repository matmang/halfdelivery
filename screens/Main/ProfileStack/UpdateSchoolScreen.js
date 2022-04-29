import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styled from "styled-components";
import colors from "../../../colors";
import Btn from "../../../components/Auth/Btn";
import { height, width } from "../../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ExplainContainer = styled.View`
  width: ${width * 416}px;
  height: ${height * 116}px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const InputAreaContainer = styled.View`
  background-color: white;
  width: 100%;
  margin-top: ${height * 8}px;
`;

const FirstContainer = styled.View`
  margin-top: ${width * 41};
  width: 100%;
`;

const InputContainer = styled.View`
  margin-top: ${width * 45};
  width: 100%;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  width: 100%;
  padding-top: ${height * 12}px;
  padding-bottom: ${height * 24}px;
  height: ${height * 82}px;
  bottom: 0;
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: ${width * 14};
  include-font-padding: false;
  text-align-vertical: center;
`;

const NameText = styled.Text`
  font-family: "noto-medium";
  font-size: ${width * 17}px;
  color: ${colors.primaryBlue};
  margin-left: ${width * 24}px;
`;

export default ({ navigation }) => {
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [accent, setAccent] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [schoolItems, setSchoolItems] = useState([
    { label: "한양대학교 ERICA", value: "ERICA" },
  ]);
  const [collegeItems, setCollegeItems] = useState([
    { label: "공학대학", value: "1" },
    { label: "소프트웨어융합대학", value: "2" },
    { label: "약학대학", value: "3" },
    { label: "과학기술융합대학", value: "4" },
    { label: "국제문화대학", value: "5" },
    { label: "언론정보대학", value: "6" },
    { label: "경상대학", value: "7" },
    { label: "디자인대학", value: "8" },
    { label: "예체능대학", value: "9" },
    { label: "창의융합교육원", value: "10" },
  ]);

  const [schoolPlaceholder, setSchoolPlaceholder] =
    useState("학교를 선택해주세요");
  const [collegePlaceholder, setCollegePlaceholder] =
    useState("단과대학을 선택해주세요");

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(school && college);
  }, [school, college]);

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {
        "custom:school": school.toString(),
        "custom:college": college.toString(),
      });
      console.log("Update Complete");
      const currentUserInfo = await Auth.currentUserInfo();
      console.log(
        currentUserInfo.attributes["custom:school"],
        currentUserInfo.attributes["custom:college"]
      );
    } catch (error) {
      console.log("Error update...", error);
    }
  };

  return (
    <Container>
      <ExplainContainer>
        <ExplainText>본인 명의의 학과 정보를 입력해주세요.</ExplainText>
        <ExplainText>안전한 거래를 위해서 사용되는 정보입니다.</ExplainText>
      </ExplainContainer>
      <InputAreaContainer>
        <FirstContainer>
          <NameText>학교</NameText>
          <DropDownPicker
            open={schoolOpen}
            value={value}
            setOpen={setSchoolOpen}
            setValue={setValue}
            setItems={setSchoolItems}
            items={schoolItems}
            onSelectItem={(item) => {
              setSchool(item.label);
              setSchoolPlaceholder(item.label);
            }}
            containerStyle={{ width: 336, marginLeft: 24, marginTop: 21 }}
            placeholder={schoolPlaceholder}
            zIndex={100}
          />
        </FirstContainer>
        <InputContainer>
          <NameText>단과대학</NameText>
          <DropDownPicker
            open={collegeOpen}
            value={value}
            setOpen={setCollegeOpen}
            setValue={setValue}
            setItems={setCollegeItems}
            items={collegeItems}
            onSelectItem={(item) => {
              setCollege(item.label);
              setCollegePlaceholder(item.label);
            }}
            containerStyle={{ width: 336, marginLeft: 24, marginTop: 21 }}
            placeholder={collegePlaceholder}
            zIndex={100}
          />
        </InputContainer>
      </InputAreaContainer>
      <ButtonContainer>
        <Btn text={"확인"} accent={true} onPress={handleSubmit} />
      </ButtonContainer>
    </Container>
  );
};
