export type iconType = 'commercial' | 'home' | 'refinance' | 'email' |
    'smile_good' | 'solo_owner' | 'partnership' | 'limited_liability' |
    'corporation' | 'smile_poor' | 'smile_below' | 'smile_avg' | 'smile_excelent' |
    'multi_family' | 'condominium' | 'townhouse' | 'primary_residence' |
    'secondary_home' | 'invesment_property' | 'yes' | 'no' | 'youtube' | 'cash_out'

export interface IOption {
    key: string
    value: string
}

export interface ISelectProps {
    options: Array<IOption>
    name?: string,
    firstValue: string
    extraStyle?: string
    errorMessage?: string
    register?: any
}

export interface ISteps {
    component: any
    showProgressBar: boolean
    showNextButton: boolean
    isCompleted: boolean
    customFooter: boolean
    customWay?: boolean
    field?: string
}
