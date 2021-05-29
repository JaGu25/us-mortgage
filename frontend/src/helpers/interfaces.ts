export type iconType = 'commercial' | 'home' | 'refinance' | 'email'

export interface IOption {
    key: string,
    value: string
}

export interface ISelectProps {
    options: Array<IOption>
}
