import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { profile } from "../../api";
import Btn from "../../components/Auth/Btn";
import { logOut } from "../../redux/usersSlice";
import { View, Text, Image } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.View`
  flex-direction: row;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ navigation }) => {
  const { id } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [halfMoney, setHalfMoney] = useState();

  useEffect(() => {
    const getProfile = async () => {
      const data = await profile(id)
        .then((data) => setUserData(data))
        .catch((e) => console.log(e));
      setName((userData["data"].first_name += userData["data"].last_name));
      setHalfMoney(parseInt(userData["data"].half_money));
    };
    getProfile();
  }, []);

  return (
    <Container>
      <ProfileContainer>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../../assets/Logo_300dpi.png")}
              style={{ width: 75, height: 75, borderRadius: 37.5 }}
            />
          </View>
          <View style={{ flex: 3 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "center" }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>{name}</Text>
                <Text
                  style={{ fontSize: 17, color: "gray" }}
                >{`하프머니 ${halfMoney}원`}</Text>
              </View>
            </View>
          </View>
      </ProfileContainer>
      <ButtonContainer>
        <Btn
          text={"공지사항"}
          accent
          onPress={() => navigation.navigate("InfoBoardScreen")}
        />
        <Btn
          text={"자주 묻는 질문"}
          accent
          onPress={() => navigation.navigate("InfoBoardScreen")}
        />
        <Btn
          text={"약관 및 정책"}
          accent
          onPress={() => navigation.navigate("PoliciesBoardScreen")}
        />
        <Btn text={"로그아웃"} accent onPress={() => dispatch(logOut())} />
      </ButtonContainer>
    </Container>
  );
};
