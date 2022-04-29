/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMatchingInfoInput = {
  id?: string | null,
  requiredPersons: number,
  setTime: number,
  type: MatchingType,
  platform: Platform,
};

export enum MatchingType {
  MIN_PRICE = "MIN_PRICE",
  DLV_TIP = "DLV_TIP",
}


export enum Platform {
  BAEMIN = "BAEMIN",
  YOGIYO = "YOGIYO",
  COUPANG = "COUPANG",
}


export type ModelMatchingInfoConditionInput = {
  requiredPersons?: ModelIntInput | null,
  setTime?: ModelIntInput | null,
  type?: ModelMatchingTypeInput | null,
  platform?: ModelPlatformInput | null,
  and?: Array< ModelMatchingInfoConditionInput | null > | null,
  or?: Array< ModelMatchingInfoConditionInput | null > | null,
  not?: ModelMatchingInfoConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelMatchingTypeInput = {
  eq?: MatchingType | null,
  ne?: MatchingType | null,
};

export type ModelPlatformInput = {
  eq?: Platform | null,
  ne?: Platform | null,
};

export type MatchingInfo = {
  __typename: "MatchingInfo",
  id: string,
  requiredPersons: number,
  setTime: number,
  type: MatchingType,
  platform: Platform,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMatchingInfoInput = {
  id: string,
  requiredPersons?: number | null,
  setTime?: number | null,
  type?: MatchingType | null,
  platform?: Platform | null,
};

export type DeleteMatchingInfoInput = {
  id: string,
};

export type CreateParticipantInput = {
  isReady?: boolean | null,
  orderImages?: string | null,
  orderPrice?: number | null,
  isMaster: boolean,
  id?: string | null,
};

export type ModelParticipantConditionInput = {
  isReady?: ModelBooleanInput | null,
  orderImages?: ModelStringInput | null,
  orderPrice?: ModelIntInput | null,
  isMaster?: ModelBooleanInput | null,
  and?: Array< ModelParticipantConditionInput | null > | null,
  or?: Array< ModelParticipantConditionInput | null > | null,
  not?: ModelParticipantConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Participant = {
  __typename: "Participant",
  isReady?: boolean | null,
  orderImages?: string | null,
  orderPrice?: number | null,
  isMaster: boolean,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateParticipantInput = {
  isReady?: boolean | null,
  orderImages?: string | null,
  orderPrice?: number | null,
  isMaster?: boolean | null,
  id: string,
};

export type DeleteParticipantInput = {
  id: string,
};

export type CreateStoreCategoryInput = {
  id?: string | null,
  category: string,
};

export type ModelStoreCategoryConditionInput = {
  category?: ModelStringInput | null,
  and?: Array< ModelStoreCategoryConditionInput | null > | null,
  or?: Array< ModelStoreCategoryConditionInput | null > | null,
  not?: ModelStoreCategoryConditionInput | null,
};

export type StoreCategory = {
  __typename: "StoreCategory",
  id: string,
  category: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStoreCategoryInput = {
  id: string,
  category?: string | null,
};

export type DeleteStoreCategoryInput = {
  id: string,
};

export type CreateStoreInput = {
  id?: string | null,
  store: string,
  storeImgUri?: string | null,
  minOrdPrice: number,
  minDlvTime: number,
  maxDlvTime: number,
  maxDlvTip: number,
  openHours: string,
  location?: string | null,
  telephoneNumber?: string | null,
  baeminUri?: string | null,
  yogiyoUri?: string | null,
  coupangUri?: string | null,
};

export type ModelStoreConditionInput = {
  store?: ModelStringInput | null,
  storeImgUri?: ModelStringInput | null,
  minOrdPrice?: ModelIntInput | null,
  minDlvTime?: ModelIntInput | null,
  maxDlvTime?: ModelIntInput | null,
  maxDlvTip?: ModelIntInput | null,
  openHours?: ModelStringInput | null,
  location?: ModelStringInput | null,
  telephoneNumber?: ModelStringInput | null,
  baeminUri?: ModelStringInput | null,
  yogiyoUri?: ModelStringInput | null,
  coupangUri?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  store: string,
  storeImgUri?: string | null,
  minOrdPrice: number,
  minDlvTime: number,
  maxDlvTime: number,
  maxDlvTip: number,
  openHours: string,
  location?: string | null,
  telephoneNumber?: string | null,
  baeminUri?: string | null,
  yogiyoUri?: string | null,
  coupangUri?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStoreInput = {
  id: string,
  store?: string | null,
  storeImgUri?: string | null,
  minOrdPrice?: number | null,
  minDlvTime?: number | null,
  maxDlvTime?: number | null,
  maxDlvTip?: number | null,
  openHours?: string | null,
  location?: string | null,
  telephoneNumber?: string | null,
  baeminUri?: string | null,
  yogiyoUri?: string | null,
  coupangUri?: string | null,
};

export type DeleteStoreInput = {
  id: string,
};

export type CreateMenuInput = {
  id?: string | null,
  menuCategory: string,
  menu: string,
  menuImgUri?: string | null,
  menuDetail?: string | null,
  price: number,
};

export type ModelMenuConditionInput = {
  menuCategory?: ModelStringInput | null,
  menu?: ModelStringInput | null,
  menuImgUri?: ModelStringInput | null,
  menuDetail?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  menuCategory: string,
  menu: string,
  menuImgUri?: string | null,
  menuDetail?: string | null,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMenuInput = {
  id: string,
  menuCategory?: string | null,
  menu?: string | null,
  menuImgUri?: string | null,
  menuDetail?: string | null,
  price?: number | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  newMessages?: number | null,
  master: string,
  onSetting?: boolean | null,
};

export type ModelChatRoomConditionInput = {
  newMessages?: ModelIntInput | null,
  master?: ModelStringInput | null,
  onSetting?: ModelBooleanInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  newMessages?: number | null,
  master: string,
  onSetting?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChatRoomInput = {
  id: string,
  newMessages?: number | null,
  master?: string | null,
  onSetting?: boolean | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  image?: string | null,
  audio?: string | null,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  image?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  image?: string | null,
  audio?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  image?: string | null,
  audio?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  phone_number?: string | null,
  bank?: string | null,
  accountnumber?: string | null,
  school?: string | null,
  college?: string | null,
  birthday?: string | null,
  status?: string | null,
  agree?: boolean | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  bank?: ModelStringInput | null,
  accountnumber?: ModelStringInput | null,
  school?: ModelStringInput | null,
  college?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  status?: ModelStringInput | null,
  agree?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  imageUri?: string | null,
  phone_number?: string | null,
  bank?: string | null,
  accountnumber?: string | null,
  school?: string | null,
  college?: string | null,
  birthday?: string | null,
  status?: string | null,
  agree?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  phone_number?: string | null,
  bank?: string | null,
  accountnumber?: string | null,
  school?: string | null,
  college?: string | null,
  birthday?: string | null,
  status?: string | null,
  agree?: boolean | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelMatchingInfoFilterInput = {
  id?: ModelIDInput | null,
  requiredPersons?: ModelIntInput | null,
  setTime?: ModelIntInput | null,
  type?: ModelMatchingTypeInput | null,
  platform?: ModelPlatformInput | null,
  and?: Array< ModelMatchingInfoFilterInput | null > | null,
  or?: Array< ModelMatchingInfoFilterInput | null > | null,
  not?: ModelMatchingInfoFilterInput | null,
};

export type ModelMatchingInfoConnection = {
  __typename: "ModelMatchingInfoConnection",
  items:  Array<MatchingInfo | null >,
  nextToken?: string | null,
};

export type ModelParticipantFilterInput = {
  isReady?: ModelBooleanInput | null,
  orderImages?: ModelStringInput | null,
  orderPrice?: ModelIntInput | null,
  isMaster?: ModelBooleanInput | null,
  and?: Array< ModelParticipantFilterInput | null > | null,
  or?: Array< ModelParticipantFilterInput | null > | null,
  not?: ModelParticipantFilterInput | null,
};

export type ModelParticipantConnection = {
  __typename: "ModelParticipantConnection",
  items:  Array<Participant | null >,
  nextToken?: string | null,
};

export type ModelStoreCategoryFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelStoreCategoryFilterInput | null > | null,
  or?: Array< ModelStoreCategoryFilterInput | null > | null,
  not?: ModelStoreCategoryFilterInput | null,
};

export type ModelStoreCategoryConnection = {
  __typename: "ModelStoreCategoryConnection",
  items:  Array<StoreCategory | null >,
  nextToken?: string | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  store?: ModelStringInput | null,
  storeImgUri?: ModelStringInput | null,
  minOrdPrice?: ModelIntInput | null,
  minDlvTime?: ModelIntInput | null,
  maxDlvTime?: ModelIntInput | null,
  maxDlvTip?: ModelIntInput | null,
  openHours?: ModelStringInput | null,
  location?: ModelStringInput | null,
  telephoneNumber?: ModelStringInput | null,
  baeminUri?: ModelStringInput | null,
  yogiyoUri?: ModelStringInput | null,
  coupangUri?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  menuCategory?: ModelStringInput | null,
  menu?: ModelStringInput | null,
  menuImgUri?: ModelStringInput | null,
  menuDetail?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  newMessages?: ModelIntInput | null,
  master?: ModelStringInput | null,
  onSetting?: ModelBooleanInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  image?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  bank?: ModelStringInput | null,
  accountnumber?: ModelStringInput | null,
  school?: ModelStringInput | null,
  college?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  status?: ModelStringInput | null,
  agree?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type CreateMatchingInfoMutationVariables = {
  input: CreateMatchingInfoInput,
  condition?: ModelMatchingInfoConditionInput | null,
};

export type CreateMatchingInfoMutation = {
  createMatchingInfo?:  {
    __typename: "MatchingInfo",
    id: string,
    requiredPersons: number,
    setTime: number,
    type: MatchingType,
    platform: Platform,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMatchingInfoMutationVariables = {
  input: UpdateMatchingInfoInput,
  condition?: ModelMatchingInfoConditionInput | null,
};

export type UpdateMatchingInfoMutation = {
  updateMatchingInfo?:  {
    __typename: "MatchingInfo",
    id: string,
    requiredPersons: number,
    setTime: number,
    type: MatchingType,
    platform: Platform,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMatchingInfoMutationVariables = {
  input: DeleteMatchingInfoInput,
  condition?: ModelMatchingInfoConditionInput | null,
};

export type DeleteMatchingInfoMutation = {
  deleteMatchingInfo?:  {
    __typename: "MatchingInfo",
    id: string,
    requiredPersons: number,
    setTime: number,
    type: MatchingType,
    platform: Platform,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateParticipantMutationVariables = {
  input: CreateParticipantInput,
  condition?: ModelParticipantConditionInput | null,
};

export type CreateParticipantMutation = {
  createParticipant?:  {
    __typename: "Participant",
    isReady?: boolean | null,
    orderImages?: string | null,
    orderPrice?: number | null,
    isMaster: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateParticipantMutationVariables = {
  input: UpdateParticipantInput,
  condition?: ModelParticipantConditionInput | null,
};

export type UpdateParticipantMutation = {
  updateParticipant?:  {
    __typename: "Participant",
    isReady?: boolean | null,
    orderImages?: string | null,
    orderPrice?: number | null,
    isMaster: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteParticipantMutationVariables = {
  input: DeleteParticipantInput,
  condition?: ModelParticipantConditionInput | null,
};

export type DeleteParticipantMutation = {
  deleteParticipant?:  {
    __typename: "Participant",
    isReady?: boolean | null,
    orderImages?: string | null,
    orderPrice?: number | null,
    isMaster: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoreCategoryMutationVariables = {
  input: CreateStoreCategoryInput,
  condition?: ModelStoreCategoryConditionInput | null,
};

export type CreateStoreCategoryMutation = {
  createStoreCategory?:  {
    __typename: "StoreCategory",
    id: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoreCategoryMutationVariables = {
  input: UpdateStoreCategoryInput,
  condition?: ModelStoreCategoryConditionInput | null,
};

export type UpdateStoreCategoryMutation = {
  updateStoreCategory?:  {
    __typename: "StoreCategory",
    id: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoreCategoryMutationVariables = {
  input: DeleteStoreCategoryInput,
  condition?: ModelStoreCategoryConditionInput | null,
};

export type DeleteStoreCategoryMutation = {
  deleteStoreCategory?:  {
    __typename: "StoreCategory",
    id: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    store: string,
    storeImgUri?: string | null,
    minOrdPrice: number,
    minDlvTime: number,
    maxDlvTime: number,
    maxDlvTip: number,
    openHours: string,
    location?: string | null,
    telephoneNumber?: string | null,
    baeminUri?: string | null,
    yogiyoUri?: string | null,
    coupangUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    store: string,
    storeImgUri?: string | null,
    minOrdPrice: number,
    minDlvTime: number,
    maxDlvTime: number,
    maxDlvTip: number,
    openHours: string,
    location?: string | null,
    telephoneNumber?: string | null,
    baeminUri?: string | null,
    yogiyoUri?: string | null,
    coupangUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    store: string,
    storeImgUri?: string | null,
    minOrdPrice: number,
    minDlvTime: number,
    maxDlvTime: number,
    maxDlvTip: number,
    openHours: string,
    location?: string | null,
    telephoneNumber?: string | null,
    baeminUri?: string | null,
    yogiyoUri?: string | null,
    coupangUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    menuCategory: string,
    menu: string,
    menuImgUri?: string | null,
    menuDetail?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    menuCategory: string,
    menu: string,
    menuImgUri?: string | null,
    menuDetail?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    menuCategory: string,
    menu: string,
    menuImgUri?: string | null,
    menuDetail?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    newMessages?: number | null,
    master: string,
    onSetting?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    newMessages?: number | null,
    master: string,
    onSetting?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    newMessages?: number | null,
    master: string,
    onSetting?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    image?: string | null,
    audio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    image?: string | null,
    audio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    image?: string | null,
    audio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    phone_number?: string | null,
    bank?: string | null,
    accountnumber?: string | null,
    school?: string | null,
    college?: string | null,
    birthday?: string | null,
    status?: string | null,
    agree?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    phone_number?: string | null,
    bank?: string | null,
    accountnumber?: string | null,
    school?: string | null,
    college?: string | null,
    birthday?: string | null,
    status?: string | null,
    agree?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    phone_number?: string | null,
    bank?: string | null,
    accountnumber?: string | null,
    school?: string | null,
    college?: string | null,
    birthday?: string | null,
    status?: string | null,
    agree?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMatchingInfoQueryVariables = {
  id: string,
};

export type GetMatchingInfoQuery = {
  getMatchingInfo?:  {
    __typename: "MatchingInfo",
    id: string,
    requiredPersons: number,
    setTime: number,
    type: MatchingType,
    platform: Platform,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMatchingInfosQueryVariables = {
  filter?: ModelMatchingInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchingInfosQuery = {
  listMatchingInfos?:  {
    __typename: "ModelMatchingInfoConnection",
    items:  Array< {
      __typename: "MatchingInfo",
      id: string,
      requiredPersons: number,
      setTime: number,
      type: MatchingType,
      platform: Platform,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetParticipantQueryVariables = {
  id: string,
};

export type GetParticipantQuery = {
  getParticipant?:  {
    __typename: "Participant",
    isReady?: boolean | null,
    orderImages?: string | null,
    orderPrice?: number | null,
    isMaster: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListParticipantsQueryVariables = {
  filter?: ModelParticipantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipantsQuery = {
  listParticipants?:  {
    __typename: "ModelParticipantConnection",
    items:  Array< {
      __typename: "Participant",
      isReady?: boolean | null,
      orderImages?: string | null,
      orderPrice?: number | null,
      isMaster: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoreCategoryQueryVariables = {
  id: string,
};

export type GetStoreCategoryQuery = {
  getStoreCategory?:  {
    __typename: "StoreCategory",
    id: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoreCategoriesQueryVariables = {
  filter?: ModelStoreCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoreCategoriesQuery = {
  listStoreCategories?:  {
    __typename: "ModelStoreCategoryConnection",
    items:  Array< {
      __typename: "StoreCategory",
      id: string,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    store: string,
    storeImgUri?: string | null,
    minOrdPrice: number,
    minDlvTime: number,
    maxDlvTime: number,
    maxDlvTip: number,
    openHours: string,
    location?: string | null,
    telephoneNumber?: string | null,
    baeminUri?: string | null,
    yogiyoUri?: string | null,
    coupangUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      store: string,
      storeImgUri?: string | null,
      minOrdPrice: number,
      minDlvTime: number,
      maxDlvTime: number,
      maxDlvTip: number,
      openHours: string,
      location?: string | null,
      telephoneNumber?: string | null,
      baeminUri?: string | null,
      yogiyoUri?: string | null,
      coupangUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    menuCategory: string,
    menu: string,
    menuImgUri?: string | null,
    menuDetail?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      menuCategory: string,
      menu: string,
      menuImgUri?: string | null,
      menuDetail?: string | null,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    newMessages?: number | null,
    master: string,
    onSetting?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      newMessages?: number | null,
      master: string,
      onSetting?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    image?: string | null,
    audio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content?: string | null,
      chatroomID?: string | null,
      userID?: string | null,
      image?: string | null,
      audio?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    phone_number?: string | null,
    bank?: string | null,
    accountnumber?: string | null,
    school?: string | null,
    college?: string | null,
    birthday?: string | null,
    status?: string | null,
    agree?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      phone_number?: string | null,
      bank?: string | null,
      accountnumber?: string | null,
      school?: string | null,
      college?: string | null,
      birthday?: string | null,
      status?: string | null,
      agree?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMatchingInfoSubscription = {
  onCreateMatchingInfo?:  {
    __typename: "MatchingInfo",
    id: string,
    requiredPersons: number,
    setTime: number,
    type: MatchingType,
    platform: Platform,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMatchingInfoSubscription = {
  onUpdateMatchingInfo?:  {
    __typename: "MatchingInfo",
    id: string,
    requiredPersons: number,
    setTime: number,
    type: MatchingType,
    platform: Platform,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMatchingInfoSubscription = {
  onDeleteMatchingInfo?:  {
    __typename: "MatchingInfo",
    id: string,
    requiredPersons: number,
    setTime: number,
    type: MatchingType,
    platform: Platform,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateParticipantSubscription = {
  onCreateParticipant?:  {
    __typename: "Participant",
    isReady?: boolean | null,
    orderImages?: string | null,
    orderPrice?: number | null,
    isMaster: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateParticipantSubscription = {
  onUpdateParticipant?:  {
    __typename: "Participant",
    isReady?: boolean | null,
    orderImages?: string | null,
    orderPrice?: number | null,
    isMaster: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteParticipantSubscription = {
  onDeleteParticipant?:  {
    __typename: "Participant",
    isReady?: boolean | null,
    orderImages?: string | null,
    orderPrice?: number | null,
    isMaster: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStoreCategorySubscription = {
  onCreateStoreCategory?:  {
    __typename: "StoreCategory",
    id: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoreCategorySubscription = {
  onUpdateStoreCategory?:  {
    __typename: "StoreCategory",
    id: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoreCategorySubscription = {
  onDeleteStoreCategory?:  {
    __typename: "StoreCategory",
    id: string,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    store: string,
    storeImgUri?: string | null,
    minOrdPrice: number,
    minDlvTime: number,
    maxDlvTime: number,
    maxDlvTip: number,
    openHours: string,
    location?: string | null,
    telephoneNumber?: string | null,
    baeminUri?: string | null,
    yogiyoUri?: string | null,
    coupangUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    store: string,
    storeImgUri?: string | null,
    minOrdPrice: number,
    minDlvTime: number,
    maxDlvTime: number,
    maxDlvTip: number,
    openHours: string,
    location?: string | null,
    telephoneNumber?: string | null,
    baeminUri?: string | null,
    yogiyoUri?: string | null,
    coupangUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    store: string,
    storeImgUri?: string | null,
    minOrdPrice: number,
    minDlvTime: number,
    maxDlvTime: number,
    maxDlvTip: number,
    openHours: string,
    location?: string | null,
    telephoneNumber?: string | null,
    baeminUri?: string | null,
    yogiyoUri?: string | null,
    coupangUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    menuCategory: string,
    menu: string,
    menuImgUri?: string | null,
    menuDetail?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    menuCategory: string,
    menu: string,
    menuImgUri?: string | null,
    menuDetail?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    menuCategory: string,
    menu: string,
    menuImgUri?: string | null,
    menuDetail?: string | null,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    newMessages?: number | null,
    master: string,
    onSetting?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    newMessages?: number | null,
    master: string,
    onSetting?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    newMessages?: number | null,
    master: string,
    onSetting?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    image?: string | null,
    audio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    image?: string | null,
    audio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content?: string | null,
    chatroomID?: string | null,
    userID?: string | null,
    image?: string | null,
    audio?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    phone_number?: string | null,
    bank?: string | null,
    accountnumber?: string | null,
    school?: string | null,
    college?: string | null,
    birthday?: string | null,
    status?: string | null,
    agree?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    phone_number?: string | null,
    bank?: string | null,
    accountnumber?: string | null,
    school?: string | null,
    college?: string | null,
    birthday?: string | null,
    status?: string | null,
    agree?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    phone_number?: string | null,
    bank?: string | null,
    accountnumber?: string | null,
    school?: string | null,
    college?: string | null,
    birthday?: string | null,
    status?: string | null,
    agree?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
