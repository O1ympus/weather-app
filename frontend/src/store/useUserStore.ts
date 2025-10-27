import {IUser} from '../types/User'
import {create} from 'zustand/react'

interface UserState {
	users: IUser[],
	setUsers: (users: IUser[]) => void;
	addUser: (user: IUser) => void;
}

export const useUserStore = create<UserState>((set) => ({
	users: [],
	setUsers: (users) => set({ users }),
	addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}))
