type BlogPageProps = {
    params: { date: string, slug: string },
}

export default function BlogPage({params: {date, slug}}: BlogPageProps) {
    return (
        <h1>Blog {date} / {slug} </h1>
    );
}