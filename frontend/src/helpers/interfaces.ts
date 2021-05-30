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
    name?: string,
    firstValue: string
    extraStyle?: string
    errorMessage?: string
    register?: any
}

export interface ISteps {
    component: any
    showProgressBar: boolean
    isCompleted: boolean
}
