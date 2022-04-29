/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMatchingInfo = /* GraphQL */ `
  subscription OnCreateMatchingInfo {
    onCreateMatchingInfo {
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
export const onUpdateMatchingInfo = /* GraphQL */ `
  subscription OnUpdateMatchingInfo {
    onUpdateMatchingInfo {
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
export const onDeleteMatchingInfo = /* GraphQL */ `
  subscription OnDeleteMatchingInfo {
    onDeleteMatchingInfo {
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
export const onCreateParticipant = /* GraphQL */ `
  subscription OnCreateParticipant {
    onCreateParticipant {
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
export const onUpdateParticipant = /* GraphQL */ `
  subscription OnUpdateParticipant {
    onUpdateParticipant {
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
export const onDeleteParticipant = /* GraphQL */ `
  subscription OnDeleteParticipant {
    onDeleteParticipant {
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
export const onCreateStoreCategory = /* GraphQL */ `
  subscription OnCreateStoreCategory {
    onCreateStoreCategory {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStoreCategory = /* GraphQL */ `
  subscription OnUpdateStoreCategory {
    onUpdateStoreCategory {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStoreCategory = /* GraphQL */ `
  subscription OnDeleteStoreCategory {
    onDeleteStoreCategory {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore {
    onCreateStore {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore {
    onUpdateStore {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore {
    onDeleteStore {
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      newMessages
      master
      onSetting
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      newMessages
      master
      onSetting
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      newMessages
      master
      onSetting
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
