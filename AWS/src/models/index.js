// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OrderMenu, Order, StoreCategory, Store, Menu, ChatRoom, Message, ChatRoomUser, User } = initSchema(schema);

export {
  OrderMenu,
  Order,
  StoreCategory,
  Store,
  Menu,
  ChatRoom,
  Message,
  ChatRoomUser,
  User
};