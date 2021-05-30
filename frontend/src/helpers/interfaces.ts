import React from "react";

export type iconType = 'commercial' | 'home' | 'refinance' | 'email' |
                        'smile_good' | 'solo_owner' | 'partnership' | 'limited_liability' |
                        'corporation' | 'smile_poor' | 'smile_below' | 'smile_avg' | 'smile_excelent'
 
export interface IOption {
    key: string
    value: string
}

export interface ISelectProps {
    options: Array<IOption>
    firstValue: string
    extraStyle?: string
}

export interface ISteps {
    component:  any
    showProgressBar: boolean
    isCompleted: boolean
}
