interface RowProps {
    children: any;
    className?: string;
}

/**
 *
 * @className height required if you only want a certain number of rows
 */
const Row = ({ className, children }: RowProps) => {
    return <div className={`flex flex-wrap w-full overflow-hidden ${className}`}>{children}</div>;
};

export default Row;
