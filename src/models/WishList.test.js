import { WishListItem, WishList } from "./WishList";

it("Can create an instance of a model", () => {
	const item = WishListItem.create({
		name: "Movie name",
		price: 22.5,
		image: "https://picsum.photos/id/209/200/300"
	});

	expect(item.price).toBe(22.5);
	item.changeName("Narnia");
	expect(item.name).toBe("Narnia");
});

it("can create a wish list", () => {
	const list = WishList.create({
		items: [
			{
				name: "Movie 2",
				price: 21
			}
		]
	});
	expect(list.items.length).toBe(1);
});
