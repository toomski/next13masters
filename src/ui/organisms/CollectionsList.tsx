import { getCollectionsList } from "@/api/collections";
import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

export const CollectionsList = async () => {
	const collections = await getCollectionsList();
	return (
		<div className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-8">
				<div className="mx-auto py-8">
					<h1>Collections</h1>
					<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
						{collections.map((collection) => {
							return <CollectionListItem collection={collection} key={collection.id} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
