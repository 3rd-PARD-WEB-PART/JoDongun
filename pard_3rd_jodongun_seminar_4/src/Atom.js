import {atom} from 'recoil';

export const myInfoAge = atom({
    key: 'myInfoAge', //고유한 키 값
    default: 24,
});

export const myInfoName = atom({
    key: 'myInfoName',
    default: '김광일',
})
