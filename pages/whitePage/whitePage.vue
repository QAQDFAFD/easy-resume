<template>
	<view>
		<uni-card title="标题文字" thumbnail="" extra="额外信息" note="Tips">
			内容主体，可自定义内容及样式
		</uni-card>

		<uni-forms :modelValue="formData" style="width: 80%; margin: 0 auto;">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="年龄" name="name">
				<uni-easyinput type="text" v-model="formData.age" placeholder="请输入年龄" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby" />
			</uni-forms-item>
		</uni-forms>
	</view>


</template>
<script setup>
	import {
		reactive,
		ref
	} from "vue";
	const name = ref('test')
	const formData = reactive({
		name: 'lijiajun',
		age: 21,
		hobby: 'coding'
	})
	const hobby = reactive([{
		text: '跑步',
		value: 0
	}, {
		text: '游泳',
		value: 1
	}, {
		text: '绘画',
		value: 2
	}, {
		text: '足球',
		value: 3
	}, {
		text: '篮球',
		value: 4
	}, {
		text: '其他',
		value: 5
	}])
</script>

<style>
</style>
