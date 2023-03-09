import { baseReset, elementResets } from "./styles/reset.css";
import { sprinkles, Sprinkles } from './styles/sprinkles.css'
import clsx from 'clsx'
import { omit, pick } from 'lodash';

// Combines sprinkles and resets
export interface Atoms extends Sprinkles {
    resetElement?: keyof JSX.IntrinsicElements
    className?: string | string[]; 
}

export function atoms(atoms: Atoms) {
    const { resetElement, className, ...rest} = atoms;
    const sprinklesClassNames = sprinkles(rest);
    console.log('el + className: ', resetElement, className)
    // console.log(className)

    return clsx(
        sprinklesClassNames,
        className, 
        resetElement ? [baseReset, elementResets[resetElement]] : null
    )

}

const keys = Array.from(sprinkles.properties.keys());
console.log(keys)
export const extractAtoms = <P extends object>(props: P) => [
  pick(props, keys),
  omit(props, keys),
];