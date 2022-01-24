import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderMenuMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
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

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class OrderMenu {
  readonly id: string;
  readonly menu: string;
  readonly price: number;
  readonly quantity: number;
  readonly orderID?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderMenu, OrderMenuMetaData>);
  static copyOf(source: OrderMenu, mutator: (draft: MutableModel<OrderMenu, OrderMenuMetaData>) => MutableModel<OrderMenu, OrderMenuMetaData> | void): OrderMenu;
}

export declare class Order {
  readonly id: string;
  readonly store: string;
  readonly orderDateTime: string;
  readonly paymentAmount: number;
  readonly userID?: string;
  readonly chatroomID?: string;
  readonly OrderMenus?: (OrderMenu | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
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
  readonly baeminUri?: string;
  readonly telephoneNumber?: string;
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

export declare class ChatRoom {
  readonly id: string;
  readonly newMessages?: number;
  readonly LastMessage?: Message;
  readonly ChatRoomUsers?: (ChatRoomUser | null)[];
  readonly matchingInfo?: string;
  readonly Orders?: (Order | null)[];
  readonly host: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
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

export declare class ChatRoomUser {
  readonly id: string;
  readonly chatroom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ChatRoomUser, ChatRoomUserMetaData>);
  static copyOf(source: ChatRoomUser, mutator: (draft: MutableModel<ChatRoomUser, ChatRoomUserMetaData>) => MutableModel<ChatRoomUser, ChatRoomUserMetaData> | void): ChatRoomUser;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string;
  readonly phone_number?: string;
  readonly chatrooms?: (ChatRoomUser | null)[];
  readonly Messages?: (Message | null)[];
  readonly bank?: string;
  readonly Orders?: (Order | null)[];
  readonly OrderMenus?: (OrderMenu | null)[];
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