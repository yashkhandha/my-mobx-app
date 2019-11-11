import { types } from "mobx-state-tree";

// const data = {
// 	name: "Movie",
// 	price: 22.52,
// 	image: ""
// };

export const WishListItem = types
	.model({
		name: types.string,
		price: types.number,
		image: ""
	})
	.actions(self => ({
		changeName(newName) {
			self.name = newName;
		},
		changePrice(newPrice) {
			self.price = newPrice;
		}
	}));

export const WishList = types
	.model({
		items: types.optional(types.array(WishListItem), [])
	})
	.actions(self);
