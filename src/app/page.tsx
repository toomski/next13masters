import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

export default function HomePage() {
	return (
		<>
			<CollectionsList />
			<SuggestedProductsList />
		</>
	);
}
