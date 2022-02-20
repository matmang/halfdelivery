// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Participant, User, ChatRoomUser, ChatRoom, Message, StoreCategory, Store, Menu } = initSchema(schema);

export {
  Participant,
  User,
  ChatRoomUser,
  ChatRoom,
  Message,
  StoreCategory,
  Store,
  Menu
};