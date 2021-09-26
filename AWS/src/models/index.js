// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ChatRoom, Message, ChatRoomUser, User } = initSchema(schema);

export {
  ChatRoom,
  Message,
  ChatRoomUser,
  User
};