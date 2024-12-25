/* eslint-disable @typescript-eslint/no-explicit-any */
export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type ReactElementType = any;

export interface ReactElement {
	$$typeof: symbol | number;
	type: ReactElementType;
	key: Key;
	ref: Ref;
	props: Props;
}
