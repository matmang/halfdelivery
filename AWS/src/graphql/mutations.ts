/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMatchingInfo = /* GraphQL */ `
  mutation CreateMatchingInfo(
    $input: CreateMatchingInfoInput!
    $condition: ModelMatchingInfoConditionInput
  ) {
    createMatchingInfo(input: $input, condition: $condition) {
      id
      requiredPersons
      setTime
      type
      platform
      createdAt
      updatedAt
    }
  }
`;
export const updateMatchingInfo = /* GraphQL */ `
  mutation UpdateMatchingInfo(
    $input: UpdateMatchingInfoInput!
    $condition: ModelMatchingInfoConditionInput
  ) {
    updateMatchingInfo(input: $input, condition: $condition) {
      id
      requiredPersons
      setTime
      type
      platform
      createdAt
      updatedAt
    }
  }
`;
export const deleteMatchingInfo = /* GraphQL */ `
  mutation DeleteMatchingInfo(
    $input: DeleteMatchingInfoInput!
    $condition: ModelMatchingInfoConditionInput
  ) {
    deleteMatchingInfo(input: $input, condition: $condition) {
      id
      requiredPersons
      setTime
      type
      platform
      createdAt
      updatedAt
    }
  }
`;
export const createParticipant = /* GraphQL */ `
  mutation CreateParticipant(
    $input: CreateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    createParticipant(input: $input, condition: $condition) {
      isReady
      orderImages
      orderPrice
      isMaster
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateParticipant = /* GraphQL */ `
  mutation UpdateParticipant(
    $input: UpdateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    updateParticipant(input: $input, condition: $condition) {
      isReady
      orderImages
      orderPrice
      isMaster
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteParticipant = /* GraphQL */ `
  mutation DeleteParticipant(
    $input: DeleteParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    deleteParticipant(input: $input, condition: $condition) {
      isReady
      orderImages
      orderPrice
      isMaster
      id
      createdAt
      updatedAt
    }
  }
`;
export const createStoreCategory = /* GraphQL */ `
  mutation CreateStoreCategory(
    $input: CreateStoreCategoryInput!
    $condition: ModelStoreCategoryConditionInput
  ) {
    createStoreCategory(input: $input, condition: $condition) {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const updateStoreCategory = /* GraphQL */ `
  mutation UpdateStoreCategory(
    $input: UpdateStoreCategoryInput!
    $condition: ModelStoreCategoryConditionInput
  ) {
    updateStoreCategory(input: $input, condition: $condition) {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const deleteStoreCategory = /* GraphQL */ `
  mutation DeleteStoreCategory(
    $input: DeleteStoreCategoryInput!
    $condition: ModelStoreCategoryConditionInput
  ) {
    deleteStoreCategory(input: $input, condition: $condition) {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
      id
      store
      storeImgUri
      minOrdPrice
      minDlvTime
      maxDlvTime
      maxDlvTip
      openHours
      location
      telephoneNumber
      baeminUri
      yogiyoUri
      coupangUri
      createdAt
      updatedAt
    }
  }
`;
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      id
      store
      storeImgUri
      minOrdPrice
      minDlvTime
      maxDlvTime
      maxDlvTip
      openHours
      location
      telephoneNumber
      baeminUri
      yogiyoUri
      coupangUri
      createdAt
      updatedAt
    }
  }
`;
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
      id
      store
      storeImgUri
      minOrdPrice
      minDlvTime
      maxDlvTime
      maxDlvTip
      openHours
      location
      telephoneNumber
      baeminUri
      yogiyoUri
      coupangUri
      createdAt
      updatedAt
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      menuCategory
      menu
      menuImgUri
      menuDetail
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      menuCategory
      menu
      menuImgUri
      menuDetail
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      menuCategory
      menu
      menuImgUri
      menuDetail
      price
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      newMessages
      master
      onSetting
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      newMessages
      master
      onSetting
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      newMessages
      master
      onSetting
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      chatroomID
      userID
      image
      audio
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      chatroomID
      userID
      image
      audio
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      chatroomID
      userID
      image
      audio
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      phone_number
      bank
      accountnumber
      school
      college
      birthday
      status
      agree
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      phone_number
      bank
      accountnumber
      school
      college
      birthday
      status
      agree
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      phone_number
      bank
      accountnumber
      school
      college
      birthday
      status
      agree
      createdAt
      updatedAt
    }
  }
`;
