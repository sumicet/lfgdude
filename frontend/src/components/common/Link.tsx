import { Link as ReactRouterLink } from 'react-router-dom';

interface LinkProps {
    to: string;
    className?: string;
    children: any;
}

const Link = ({ to, className = '', children }: LinkProps) => {
    return (
        <>
            {to.includes('https://') ? (
                <a className={className} href={to} target='_blank' rel='noreferrer'>
                    {children}
                </a>
            ) : (
                <ReactRouterLink className={className} to={{ pathname: to }}>
                    {children}
                </ReactRouterLink>
            )}
        </>
    );
};

export default Link;
