import React from 'react';
import clsx from 'clsx';

import classes from './ListItem.module.css';

interface Props extends React.ComponentPropsWithoutRef<'li'> {
    clickable?: boolean;
    dense?: boolean;
}

function ListItem({ className, clickable, dense, onClick, ...rest }: Props) {
    const rootClassName = clsx(className, classes.root, {
        [classes.clickable]: clickable,
        [classes.dense]: dense,
    });

    function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        onClick && onClick(e);

        const { currentTarget: node } = e;

        // selection of all li with querySelector then remove classes.selected forEach item of classList
        const HighlightListItem = document.querySelectorAll('li');
        HighlightListItem.forEach((item) => item.classList.remove(classes.selected));

        // selection class only for selected
        node.classList.add(classes.selected);
    }

    return <li className={rootClassName} onClick={handleClick} {...rest} />;
}

export default ListItem;
