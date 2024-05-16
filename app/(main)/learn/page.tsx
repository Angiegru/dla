import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                My sticky wrapper.
            </StickyWrapper>
            <FeedWrapper>
                My feed wrapper.
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;