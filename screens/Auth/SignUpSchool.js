import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import DismissKeyboard from "../../components/DismissKeyboard";
import colors from "../../colors";
import DropDownPicker from "react-native-dropdown-picker";
import { height, width } from "../../utils";
import { Auth } from "aws-amplify";
import BarInput from "../../components/Auth/BarInput";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ProgressContainer = styled.View`
  margin-top: ${height * 109}px;
  margin-left: ${width * 24}px;
`;

const SchoolContainer = styled.View`
  margin-top: ${height * 68}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  justify-content: flex-start;
`;

const CollageContainer = styled.View`
  margin-top: ${height * 24}px;
  margin-left: ${width * 24}px;
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
  z-index: 0;
`;

const TitleText = styled.Text`
  font-family: "noto-medium";
  font-size: 24px;
  margin-top: ${height * 22}px;
  margin-left: ${width * 24}px;
  line-height: 40px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const NameText = styled.Text`
  font-family: "noto-medium";
  font-size: 15px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const CollegeText = styled.Text`
  font-family: "noto-medium";
  font-size: 15px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ route: { params }, navigation }) => {
  const [username, setUsername] = useState(params?.birthday);
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
      const user = await Auth.signIn(params.birthday, params.password);
      await Auth.updateUserAttributes(user, {
        "custom:school": school.toString(),
        "custom:college": college.toString(),
      });
      console.log("Update Complete");
      const currentUserInfo = await Auth.currentUserInfo();
      console.log(
        currentUserInfo.attributes["custom:school"],
        currentUserInfo.attributes["custom:college"],
        currentUserInfo.username
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
            source={require("../../assets/images/halfd_color_logo.png")}
            style={{
              width: width * 40,
              height: height * 58.01,
              resizeMode: "contain",
            }}
          />
        </ProgressContainer>
        <TitleText>학과 정보를 입력해주세요</TitleText>
        <SchoolContainer>
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
        </SchoolContainer>
        <CollageContainer>
          <CollegeText>단과대학</CollegeText>
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
        </CollageContainer>
        <CollageContainer>
          <NameText>학번 / 교번</NameText>
          <BarInput
            placeholder={"학번 또는 교번을 입력해주세요"}
            stateFn={setUsername}
            value={username}
            isValued={username ? true : false}
          />
        </CollageContainer>
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
