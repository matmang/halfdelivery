// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Platform = {
  "BAEMIN": "BAEMIN",
  "YOGIYO": "YOGIYO",
  "COUPANG": "COUPANG"
};

const MatchingType = {
  "MIN_PRICE": "MIN_PRICE",
  "DLV_TIP": "DLV_TIP"
};

const { MatchingInfo, StoreCategory, Store, Menu, Participant, User, Message, ChatRoom } = initSchema(schema);

export {
  MatchingInfo,
  StoreCategory,
  Store,
  Menu,
  Participant,
  User,
  Message,
  ChatRoom,
  Platform,
  MatchingType
};