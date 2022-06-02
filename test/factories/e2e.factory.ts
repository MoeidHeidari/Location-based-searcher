import { datatype } from 'faker';

export const E2E_FAKE_INVITATION_REQUEST_1 = {
    radius: datatype.number(2000).toString(),
    limit: '500',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_2 = {
    radius: 'true',
    limit: '500',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_3 = {
    radius: 'false',
    limit: '500',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_4 = {
    limit: '500',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_5 = {
    radius: '',
    limit: '500',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_6 = {
    radius: datatype.number(2000).toString(),
    limit: 'werwer',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_7 = {
    radius: datatype.number(2000).toString(),
    limit: 'true',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_8 = {
    radius: datatype.number(2000).toString(),
    limit: 'false',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_9 = {
    radius: datatype.number(2000).toString(),
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_10 = {
    radius: datatype.number(2000).toString(),
    limit: '',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_11 = {
    limit: ' ',
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_12 = {
    radius: datatype.number(2000).toString(),
};
export const E2E_FAKE_INVITATION_REQUEST_13 = {
    page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_14 = {
    limit: '10',
};
