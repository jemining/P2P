import { IUser } from './../../components/component/PostCard/PostCard';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import auth from '../../api/auth';
import { BaseOptions } from 'vm';

interface IAuthState {
  logInLoading: boolean;
  logInDone: boolean;
  logInError: any;
  logOutDone: boolean;
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: any;
  updateUserLoading: boolean;
  updateUserDone: boolean;
  updateUserError: any;
  deleteProfileImgLoading: boolean;
  deleteProfileImgDone: boolean;
  deleteProfileImgError: any;
  removeAccountLoading: boolean;
  removeAccountDone: boolean;
  removeAccountError: any;
  modalMessage: string | null;
  user: IUser | null;
}

const initialState: IAuthState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutDone: false,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  updateUserLoading: false,
  updateUserDone: false,
  updateUserError: null,
  deleteProfileImgLoading: false,
  deleteProfileImgDone: false,
  deleteProfileImgError: null,
  removeAccountLoading: false,
  removeAccountDone: false,
  removeAccountError: null,
  modalMessage: null,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInRequest: (state, action: PayloadAction<any>) => {
        state.logInLoading = true;
        state.logInDone = false;
        state.logInError = null;
        state.logOutDone = false;
    },
    logInSuccess: (state, action: PayloadAction<IUser>) => {
        const { id, username, usercode, accessToken, profileImagePath } = action.payload;
        state.logInLoading = false;
        state.logInDone = true;
        state.user = { id, username, usercode, accessToken, profileImagePath };
        auth.setToken(accessToken);
    },
    logInFailure: (state, action: PayloadAction<any>) => {
        state.logInLoading = false;
        state.logInError = action.payload;
    },
    logOutRequest: (state) => {
        state.logInDone = false;
        state.logOutDone = true;
        state.user = null;
        auth.setToken(null);
    },
    signUpRequest: (state, action: PayloadAction<any>) => {
        state.signUpLoading = true;
        state.signUpDone = false;
        state.signUpError = null;
    },
    signUpSuccess: (state, action: PayloadAction<any>) => {
        state.signUpLoading = false;
        state.signUpDone = true;
    },
    signUpFailure: (state, action: PayloadAction<any>) => {
        state.signUpLoading = false;
        state.signUpError = action.payload;
    },
    signUpInit: (state) => {
        state.logInError = null;
        state.signUpDone = false;
        state.signUpError = null;
    },
    updateUserRequest: (state, action: PayloadAction<any>) => {
        state.updateUserLoading = true;
        state.updateUserDone = false;
        state.updateUserError = null;
    },
    updateUserSuccess: (state, action: PayloadAction<any>) => {
        state.updateUserLoading = false;
        state.updateUserDone = true;
        if (action.payload.usercode) state.user.usercode = action.payload.usercode;
        else if (action.payload.profileImagePath) state.user.profileImagePath = action.payload.profileImagePath;
        state.modalMessage = "프로필 정보 수정";
    },
    updateUserFailure: (state, action: PayloadAction<any>) => {
        state.updateUserLoading = false;
        state.updateUserError = action.payload;
    },
    deleteProfileImgRequest: (state) => {
        state.deleteProfileImgLoading = true;
        state.deleteProfileImgDone = false;
        state.deleteProfileImgError = null;
    },
    deleteProfileImgSuccess: (state) => {
        state.deleteProfileImgLoading = false;
        state.deleteProfileImgDone = true;
        state.user.profileImagePath = null;
        state.modalMessage = "프로필 이미지 삭제";
    },
    deleteProfileImgFailure: (state, action: PayloadAction<any>) => {
        state.deleteProfileImgLoading = false;
        state.deleteProfileImgError = action.payload;
    },
    removeAccountRequest: (state) => {
        state.removeAccountLoading = true;
        state.removeAccountDone = false;
        state.removeAccountError = null;
    },
    removeAccountSuccess: (state) => {
        state.removeAccountLoading = false;
        state.removeAccountDone = true;
        state.user = null;
        state.modalMessage = "회원탈퇴";
    },
    removeAccountFailure: (state, action: PayloadAction<any>) => {
        state.removeAccountLoading = false;
        state.removeAccountError = action.payload;
    },
    clearModalMessage: (state) => {
        state.modalMessage = null;
    }
  }
})

export const {
  logInRequest,
  logInSuccess,
  logInFailure,
  logOutRequest,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signUpInit,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteProfileImgRequest,
  deleteProfileImgSuccess,
  deleteProfileImgFailure,
  removeAccountRequest,
  removeAccountSuccess,
  removeAccountFailure,
  clearModalMessage
} = authSlice.actions;
export default authSlice.reducer;