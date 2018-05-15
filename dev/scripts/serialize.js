/**
 * 工具函数，将数组以key指定的键转换为hash对象
 * 用于快速查找使用
 * @param {*} source 
 * @param {*} key 
 */

function Flatten(source, key="id") {
	let obj = {};
	for (var i=0,len=source.length;i<len;i++) {
		let value = source[i][key];
		if (typeof value != "undefined") {
			source[i].$index = i;
			obj[value] = source[i];
		}
	}
	return obj;
}

/**
 * 链表简单实现
 * 用于数组的快速查找，检索及索引的自动生成
 * 多用于大数据的处理及检索操作
 */
class Serialized {
	constructor(list=[], key="id") {
		this._key  = key;
		this.update(list);
	}

	findByKey(key, value) {
		return this._list.find((item)=>{
			if (item[key] == value) {
				return true;
			}
		});
	}

	data() {
		return this._list.concat();
	}

	first() {
		return this._list[0];
	}

	modify(method, ...params) {
		this._list[method](...params);
		this.update(this._list);
	}

	update(list) {
		if (list instanceof Array) {
			this._list = list;
			this._hash = Flatten(list, this._key);
		}
	}

	merge(list) {
		if (!list instanceof Array) {return;}
		list.forEach((item)=>{
			let _key  = item[this._key];
			let _item = this.get(_key);
			if (_item) {
				this._list[_item.$index] = item;
			} else {
				this._list.push(item);
			}
		});
		this._hash = Flatten(this._list, this._key);
	}

	remove(key) {
		let _item = this.get(key);
		if (_item) {
			this._list.splice(_item.$index,1)
			this._hash = Flatten(this._list, this._key);
		}
	}

	get(key) {
		return this._hash[key];
	}

	next(key) {
		let value = this.get(key);
		if (!value) return;
		let index = value.$index;
		return this._list[index+1];
	}

	prev(key) {
		let value = this.get(key);
		if (!value) return;
		let index = value.$index;
		return this._list[index-1];
	}

	index(i) {
		return this._list[i];
	}
}

module.exports = Serialized