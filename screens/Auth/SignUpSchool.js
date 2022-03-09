import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import DismissKeyboard from "../../components/DismissKeyboard";
import Auth from "@aws-amplify/auth";
import colors from "../../colors";
import DropDownPicker from "react-native-dropdown-picker";
import { height, width } from "../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const ProgressContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 80}px;
`;

const PhaseContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 22}px;
  height: ${height * 56}px;
`;

const IDContainer = styled.View`
  margin-top: ${height * 74}px;
  margin-left: ${width * 23}px;
  margin-right: auto;
  justify-content: flex-start;
  z-index: 10;
`;

const PasswordContainer = styled.View`
  margin-top: ${height * 5}px;
  margin-left: ${width * 23}px;
  margin-right: auto;
  justify-content: flex-start;
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

const PhaseText = styled.Text`
  font-family: "noto-medium";
  font-size: 22px;
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  color: #3c3c3c;
  margin-top: ${height * -20}px;
`;

const NameText = styled.Text`
  font-family: "noto-medium";
  font-size: 15px;
  color: ${colors.primaryBlue};
`;

const CollegeText = styled.Text`
  margin-top: ${height * 10}px;
  font-family: "noto-medium";
  font-size: 15px;
  color: ${colors.primaryBlue};
`;

export default ({ route: { params }, navigation }) => {
  const [username, setusername] = useState(params?.username);
  const [password, setPassword] = useState(params?.password);
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
      const user = await Auth.signIn(params.username, params.password);
      console.log(user);
      await Auth.updateUserAttributes(user, {
        "custom:school": school.toString(),
        "custom:college": college.toString(),
      });
      console.log("Update Complete");
      const currentUserInfo = await Auth.currentUserInfo();
      console.log(
        currentUserInfo.attributes["custom:school"],
        currentUserInfo.attributes["custom:college"],
        currentUserInfo.attributes["custom:birthday"]
      );
      navigation.navigate("SignUpBank", { username, password });
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <ProgressContainer>
          <Image
            source={require("../../assets/images/SignUp2.png")}
            style={{ width: width * 180, height: height * 44 }}
          />
        </ProgressContainer>
        <PhaseContainer>
          <PhaseText>학과정보를 입력해주세요</PhaseText>
          <ExplainText>안전한 거래를 위해서 사용되는 정보입니다.</ExplainText>
        </PhaseContainer>
        <IDContainer>
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
            containerStyle={{ width: 336 }}
            placeholder={schoolPlaceholder}
            zIndex={100}
          />
          <CollegeText>단과대학</CollegeText>
        </IDContainer>
        <PasswordContainer>
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
            containerStyle={{ width: 336 }}
            placeholder={collegePlaceholder}
          />
        </PasswordContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent}
            onPress={handleSubmit}
            icon={true}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
