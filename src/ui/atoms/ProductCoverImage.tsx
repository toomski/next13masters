import NextImage from "next/image"

type ProductCoverImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export const ProductCoverImage = ({src, alt, width = 256, height = 256}: ProductCoverImageProps) => {
    return (
        <div className="rounded-md border bg-slate-50 hover:bg-slate-100">
            <NextImage
                className="w-full object-contain object-center p-4 transition-transform hover:scale-105"
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    )
}