import { memo } from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

// TODO load image properly
const Image = ({ src, alt, className }: ImageProps) => {
    return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />;
};

export default memo(Image);
