// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StoreCategory, Store, Menu, ChatRoom, Message, ChatRoomUser, User } = initSchema(schema);

export {
  StoreCategory,
  Store,
  Menu,
  ChatRoom,
  Message,
  ChatRoomUser,
  User
};