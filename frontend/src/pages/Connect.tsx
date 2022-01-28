import { useEffect } from 'react';
import Text from '../components/Text';
import { useQuery } from '../hooks/useQuery';

interface ConnectProps {}

const Connect: React.FC<ConnectProps> = () => {
    const query = useQuery();

    useEffect(() => {
        const code = query.get('code');

        if (!code) {
            return;
        }

        console.log(code);
    }, [query]);

    return (
        <div className='flex'>
            <Text size='extra-large'>Connecting...</Text>
        </div>
    );
};

export default Connect;
