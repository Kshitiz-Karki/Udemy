import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware)
    }
})

setupListeners(store.dispatch)

export * from './thunks/fetchUsers' // means export everything from 'fetchUsers' file and store/index.js (this) file as well
export * from './thunks/addUser'
export * from './thunks/removeUser'
export { useFetchAlbumsQuery } from './apis/albumsApi'
export { useAddAlbumMutation } from './apis/albumsApi'
export { useRemoveAlbumMutation } from './apis/albumsApi'
export { 
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} from './apis/photosApi'
