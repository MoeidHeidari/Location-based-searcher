import { datatype } from 'faker';

export const GET_SINGLE_CUSTOMER_BY_ID_1 = '3e242b9d-0d2d-4d0b-a001-8cadebbc6da2';
export const GET_SINGLE_CUSTOMER_BY_ID_2 = 'e6ee6861';
export const GET_SINGLE_CUSTOMER_BY_ID_3 = 'xxx';
//=============================================================================================
export const GET_USERS_WITHIN_100_KM = {
  radius: '100',
  limit: '500',
  page: '1',
};
export const GET_USERS_WITHIN_50_KM = {
  radius: '50',
  limit: '500',
  page: '1',
};
export const GET_USERS_WITHIN_0_KM = {
  radius: '0',
  limit: '500',
  page: '1',
};
export const GET_USERS_WITHIN_500_KM = {
  radius: '500',
  limit: '500',
  page: '1',
};
export const GET_USERS_WITH_WRONG_DATA = {
  radius: 'true',
  limit: '500',
  page: '1',
};
export const GET_USERS_WITH_RANDOM_DATA = {
  radius: datatype.number(2000).toString(),
  limit: '500',
  page: '1',
};
