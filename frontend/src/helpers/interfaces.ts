import React from "react";

export type iconType = 'commercial' | 'home' | 'refinance' | 'email' |
                        'smile_good'

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
