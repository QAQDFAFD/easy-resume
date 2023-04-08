import {
	defineStore
} from 'pinia'
export const info = defineStore('userUnfo', {
	state: () => {
		return {
			// 用户的信息
			userInfo: []
		}
	}
})
