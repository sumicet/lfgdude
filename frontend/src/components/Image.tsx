import { memo } from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

// TODO load image properly
const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />;
};

export default memo(Image);
