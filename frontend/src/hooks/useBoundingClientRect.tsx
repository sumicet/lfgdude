import { useEffect, useState, useCallback } from 'react';

export default function useBoundingClientRect() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

    const [node, setNode] = useState<any>(null);
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [height, setHeight] = useState<number | undefined>(undefined);
    const [left, setLeft] = useState<number | undefined>(undefined);
    const [top, setTop] = useState<number | undefined>(undefined);

    const ref = useCallback(x => {
        if (x !== null) {
            setNode(x);
        }
    }, []);

    const addEventListener = (property: string, setValue: (param: number) => void, base: any) => {
        base?.addEventListener(
            'resize',
            () => node && setValue(node.getBoundingClientRect()[property])
        );
    };

    const removeEventListener = (
        property: string,
        setValue: (param: number) => void,
        base: any
    ) => {
        base?.removeEventListener(
            'resize',
            () => node && setValue(node.getBoundingClientRect()[property])
        );
    };

    useEffect(() => {
        if (node) {
            setLeft(node.getBoundingClientRect().left);
            setTop(node.getBoundingClientRect().top);
            setWidth(node.getBoundingClientRect().width);
            setHeight(node.getBoundingClientRect().height);
        }

        addEventListener('left', setLeft, window);
        addEventListener('left', setLeft, node);

        addEventListener('right', setLeft, window);
        addEventListener('right', setLeft, node);

        addEventListener('width', setWidth, window);
        addEventListener('width', setWidth, node);

        addEventListener('height', setHeight, window);
        addEventListener('height', setHeight, node);

        return () => {
            removeEventListener('left', setLeft, window);
            removeEventListener('left', setLeft, node);

            removeEventListener('right', setLeft, window);
            removeEventListener('right', setLeft, node);

            removeEventListener('width', setWidth, window);
            removeEventListener('width', setWidth, node);

            removeEventListener('height', setHeight, window);
            removeEventListener('height', setHeight, node);
        };
    }, [addEventListener, node, removeEventListener]);

    return { ref, left, top, width, height };
}
