import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Platform {
  BAEMIN = "BAEMIN",
  YOGIYO = "YOGIYO",
  COUPANG = "COUPANG"
}

export enum MatchingType {
  MIN_PRICE = "MIN_PRICE",
  DLV_TIP = "DLV_TIP"
}



type MatchingInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StoreCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StoreMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ParticipantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MatchingInfo {
  readonly id: string;
  readonly requiredPersons: number;
  readonly StoreCategory?: StoreCategory;
  readonly Store?: Store;
  readonly setTime: number;
  readonly type: MatchingType | keyof typeof MatchingType;
  readonly platform: Platform | keyof typeof Platform;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MatchingInfo, MatchingInfoMetaData>);
  static copyOf(source: MatchingInfo, mutator: (draft: MutableModel<MatchingInfo, MatchingInfoMetaData>) => MutableModel<MatchingInfo, MatchingInfoMetaData> | void): MatchingInfo;
}

export declare class StoreCategory {
  readonly id: string;
  readonly category: string;
  readonly Stores?: (Store | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<StoreCategory, StoreCategoryMetaData>);
  static copyOf(source: StoreCategory, mutator: (draft: MutableModel<StoreCategory, StoreCategoryMetaData>) => MutableModel<StoreCategory, StoreCategoryMetaData> | void): StoreCategory;
}

export declare class Store {
  readonly id: string;
  readonly store: string;
  readonly storeImgUri?: string;
  readonly minOrdPrice: number;
  readonly minDlvTime: number;
  readonly maxDlvTime: number;
  readonly maxDlvTip: number;
  readonly openHours: string;
  readonly location?: string;
  readonly Menus?: (Menu | null)[];
  readonly storecategoryID?: string;
  readonly telephoneNumber?: string;
  readonly baeminUri?: string;
  readonly yogiyoUri?: string;
  readonly coupangUri?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Store, StoreMetaData>);
  static copyOf(source: Store, mutator: (draft: MutableModel<Store, StoreMetaData>) => MutableModel<Store, StoreMetaData> | void): Store;
}

export declare class Menu {
  readonly id: string;
  readonly menuCategory: string;
  readonly menu: string;
  readonly menuImgUri?: string;
  readonly menuDetail?: string;
  readonly price: number;
  readonly storeID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Menu, MenuMetaData>);
  static copyOf(source: Menu, mutator: (draft: MutableModel<Menu, MenuMetaData>) => MutableModel<Menu, MenuMetaData> | void): Menu;
}

export declare class Participant {
  readonly id: string;
  readonly isReady?: boolean;
  readonly orderImages?: string;
  readonly orderPrice?: number;
  readonly isMaster: boolean;
  readonly User?: User;
  readonly chatroomID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Participant, ParticipantMetaData>);
  static copyOf(source: Participant, mutator: (draft: MutableModel<Participant, ParticipantMetaData>) => MutableModel<Participant, ParticipantMetaData> | void): Participant;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string;
  readonly phone_number?: string;
  readonly Messages?: (Message | null)[];
  readonly bank?: string;
  readonly accountnumber?: string;
  readonly school?: string;
  readonly college?: string;
  readonly birthday?: string;
  readonly status?: string;
  readonly agree?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Message {
  readonly id: string;
  readonly content?: string;
  readonly chatroomID?: string;
  readonly userID?: string;
  readonly image?: string;
  readonly audio?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class ChatRoom {
  readonly id: string;
  readonly newMessages?: number;
  readonly LastMessage?: Message;
  readonly master: string;
  readonly onSetting?: boolean;
  readonly Participants?: (Participant | null)[];
  readonly MatchingInfo?: MatchingInfo;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}