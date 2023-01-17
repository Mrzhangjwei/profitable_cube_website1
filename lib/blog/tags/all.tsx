import { LinkButton } from "@components/mdx";
import clsx from "clsx";
import { GetStaticProps } from "next";
import Link from "next/link";
import { BsEyeFill } from "react-icons/bs";
import {
    getBlogPageMap,
    getStaticTagsMap,
    getTagHref,
    TagInfo,
} from "../utils/tags";

type Props = {
    //sorted tags
    tags: [string, TagInfo][];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const data = getStaticTagsMap(getBlogPageMap());
    const tags = [...data.entries()].sort((a, b) => b[1].count - a[1].count);

    return {
        props: {
            tags,
        },
    };
};

export default function AllTags({ tags }: Props) {
    return (
        <div className="flex flex-col gap-3 mt-16">
            <div className="flex flex-col gap-3 mb-3">
                <h1 className="text-5xl md:text-6xl font-bold text-center">
                    所有標籤
                </h1>
                <LinkButton
                    href="/blog"
                    link={{ className: "mx-auto" }}
                    variant="primary"
                    icon={<BsEyeFill />}
                >
                    查看文章
                </LinkButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {tags.map(([tag, info]) => (
                    <Link key={tag} href={getTagHref(tag)}>
                        <div
                            className={clsx(
                                "rounded-lg p-3 h-stack justify-between",
                                "bg-zinc-100 dark:bg-zinc-800"
                            )}
                        >
                            <span className="text-lg font-bold">{tag}</span>
                            <span className="text-secondary">{info.count}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
