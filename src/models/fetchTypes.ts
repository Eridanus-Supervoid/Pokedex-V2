import {
  ActionCreatorWithPayload,
  AsyncThunk,
  Dispatch,
} from '@reduxjs/toolkit';
import { NamedAPIResource } from 'pokenode-ts';
import {
  IAllListAndPagination,
  IElementWithId,
  IListAndPagination,
} from './stateTypes';

export interface IPaginatedRequest {
  limit?: number;
  offset: number;
}

export interface IResponseFetchCallback {
  results: NamedAPIResource[];
  count: number;
}

export interface IAsyncThunkConfig {
  state?: unknown;
  dispatch?: Dispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
}

export type IFetchCallback = AsyncThunk<
  IResponseFetchCallback,
  IPaginatedRequest,
  IAsyncThunkConfig
>;

export type IFetchAllCallback = AsyncThunk<
  IElementWithId[],
  string,
  IAsyncThunkConfig
>;

export type ISetCallback = ActionCreatorWithPayload<IListAndPagination>;

export type ISetAllCallback = ActionCreatorWithPayload<IAllListAndPagination>;
