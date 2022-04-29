/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMatchingInfo = /* GraphQL */ `
  query GetMatchingInfo($id: ID!) {
    getMatchingInfo(id: $id) {
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
export const listMatchingInfos = /* GraphQL */ `
  query ListMatchingInfos(
    $filter: ModelMatchingInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchingInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        requiredPersons
        setTime
        type
        platform
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParticipant = /* GraphQL */ `
  query GetParticipant($id: ID!) {
    getParticipant(id: $id) {
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
export const listParticipants = /* GraphQL */ `
  query ListParticipants(
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        isReady
        orderImages
        orderPrice
        isMaster
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStoreCategory = /* GraphQL */ `
  query GetStoreCategory($id: ID!) {
    getStoreCategory(id: $id) {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const listStoreCategories = /* GraphQL */ `
  query ListStoreCategories(
    $filter: ModelStoreCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        menuCategory
        menu
        menuImgUri
        menuDetail
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      newMessages
      master
      onSetting
      createdAt
      updatedAt
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        newMessages
        master
        onSetting
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        chatroomID
        userID
        image
        audio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
