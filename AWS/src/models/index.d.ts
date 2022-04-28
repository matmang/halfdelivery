import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Platform {
  BAEMIN = "BAEMIN",
  YOGIYO = "YOGIYO",
  COUPANG = "COUPANG"
}



type QnAMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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

type ParticipantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class QnA {
  readonly id: string;
  readonly tag: number;
  readonly title: string;
  readonly content: string;
  readonly images?: string[] | null;
  readonly email: string;
  readonly questioner: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly qnAQuestionerId: string;
  constructor(init: ModelInit<QnA, QnAMetaData>);
  static copyOf(source: QnA, mutator: (draft: MutableModel<QnA, QnAMetaData>) => MutableModel<QnA, QnAMetaData> | void): QnA;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly profileImgUri?: string | null;
  readonly studentIdImgUri: string;
  readonly bank: string;
  readonly accountnumber: string;
  readonly school: string;
  readonly college: string;
  readonly birthday: string;
  readonly bannedDateTime?: string | null;
  readonly banUserList?: (string | null)[] | null;
  readonly requiredTermsAgree: boolean;
  readonly optionalTermsAgree: boolean;
  readonly phone_number: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Board {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly isImportant: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Board, BoardMetaData>);
  static copyOf(source: Board, mutator: (draft: MutableModel<Board, BoardMetaData>) => MutableModel<Board, BoardMetaData> | void): Board;
}

export declare class MatchingInfo {
  readonly id: string;
  readonly endTime: string;
  readonly StoreCategoryInfo?: StoreCategory | null;
  readonly StoreInfo?: Store | null;
  readonly isRapid: boolean;
  readonly platform: Platform | keyof typeof Platform;
  readonly targetPrice: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchingInfoStoreCategoryInfoId?: string | null;
  readonly matchingInfoStoreInfoId?: string | null;
  constructor(init: ModelInit<MatchingInfo, MatchingInfoMetaData>);
  static copyOf(source: MatchingInfo, mutator: (draft: MutableModel<MatchingInfo, MatchingInfoMetaData>) => MutableModel<MatchingInfo, MatchingInfoMetaData> | void): MatchingInfo;
}

export declare class StoreCategory {
  readonly id: string;
  readonly category: string;
  readonly Stores?: (Store | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StoreCategory, StoreCategoryMetaData>);
  static copyOf(source: StoreCategory, mutator: (draft: MutableModel<StoreCategory, StoreCategoryMetaData>) => MutableModel<StoreCategory, StoreCategoryMetaData> | void): StoreCategory;
}

export declare class Store {
  readonly id: string;
  readonly name: string;
  readonly logoImgUri?: string | null;
  readonly backgroundImgUri?: string | null;
  readonly location?: string | null;
  readonly baeminUri?: string | null;
  readonly yogiyoUri?: string | null;
  readonly coupangUri?: string | null;
  readonly storecategoryID: string;
  readonly baeminDlvTip?: string | null;
  readonly yogiyoDlvTip?: string | null;
  readonly coupangDlvTip?: string | null;
  readonly baeminOrderPrice?: number | null;
  readonly yogiyoOrderPrice?: number | null;
  readonly coupangOrderPrice?: number | null;
  readonly openHours: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Store, StoreMetaData>);
  static copyOf(source: Store, mutator: (draft: MutableModel<Store, StoreMetaData>) => MutableModel<Store, StoreMetaData> | void): Store;
}

export declare class Participant {
  readonly id: string;
  readonly orderImages?: string | null;
  readonly orderPrice: number;
  readonly isMaster: boolean;
  readonly LinkedUser?: User | null;
  readonly LinkedChatRoom: string;
  readonly Messages?: (Message | null)[] | null;
  readonly isReady: boolean;
  readonly isFinished: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly participantLinkedUserId?: string | null;
  constructor(init: ModelInit<Participant, ParticipantMetaData>);
  static copyOf(source: Participant, mutator: (draft: MutableModel<Participant, ParticipantMetaData>) => MutableModel<Participant, ParticipantMetaData> | void): Participant;
}

export declare class Message {
  readonly id: string;
  readonly content?: string | null;
  readonly chatroomID?: string | null;
  readonly image?: string | null;
  readonly audio?: string | null;
  readonly participantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class ChatRoom {
  readonly id: string;
  readonly newMessages?: number | null;
  readonly master: string;
  readonly onSetting: boolean;
  readonly LastMessage?: Message | null;
  readonly Participants?: (Participant | null)[] | null;
  readonly LinkedMatchingInfo?: MatchingInfo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
  readonly chatRoomLinkedMatchingInfoId?: string | null;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}