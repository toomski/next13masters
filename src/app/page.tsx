import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export default async function HomePage() {
	return (
		<>
			<CollectionsList />
			<SuggestedProductsList />
		</>
	);
}

export async function generateStaticParams() {
	return []
}