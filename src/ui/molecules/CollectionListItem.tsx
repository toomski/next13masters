import NextImage from "next/image";
import { ActiveLink } from "../atoms/ActiveLink";
import { type CollectionListItemFragment } from "@/gql/graphql";

type CollectionListItemProps = {
	collection: CollectionListItemFragment;
};

export const CollectionListItem = ({ collection }: CollectionListItemProps) => {
	return (
		<div className="group relative">
			<div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white transition group-hover:scale-110 group-hover:opacity-75 sm:h-64">
				<NextImage
					src={collection.image.url}
					alt={collection.name}
					width={256}
					height={256}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<ActiveLink href={`/collection/${collection.slug}`} prefetch="onHover">
				<h3 className="mt-2 font-bold text-slate-700">{collection.name}</h3>
			</ActiveLink>
		</div>
	);
};
