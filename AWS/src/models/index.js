// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Platform = {
  "BAEMIN": "BAEMIN",
  "YOGIYO": "YOGIYO",
  "COUPANG": "COUPANG"
};

const { QnA, User, Board, MatchingInfo, StoreCategory, Store, Participant, Message, ChatRoom } = initSchema(schema);

export {
  QnA,
  User,
  Board,
  MatchingInfo,
  StoreCategory,
  Store,
  Participant,
  Message,
  ChatRoom,
  Platform
};