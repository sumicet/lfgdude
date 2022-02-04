import { memo, useMemo } from 'react';
import Text from '../components/common/Text';
import { ERROR } from '../constants/messages';
import { ErrorCode } from '../models/Error';

interface ErrorProps {
    code: ErrorCode;
}

const Error: React.FC<ErrorProps> = ({ code }) => {
    const title = useMemo(() => (code === 404 ? 'Page Not Found' : 'Well, that sucks..'), [code]);
    const message = useMemo(
        () =>
            code === 404
                ? "Looks like you're trying to access a page that doesn't exist."
                : ERROR.default,
        [code]
    );

    return (
        <div className='flex flex-1 flex-col items-center p-4 pt-[20vh]'>
            <Text
                className='leading-[1.2] text-8xl md:text-7xl sm:text-6xl xs:text-5xl'
                color='extra-dark'
            >
                (╯°□°）╯︵ ┻━┻
            </Text>
            <Text size='extra-large' weight='medium' className='mt-10 text-center'>
                {title}
            </Text>
            <Text color='medium' className='mt-4 text-center'>
                {message}
            </Text>
        </div>
    );
};

export default memo(Error);
