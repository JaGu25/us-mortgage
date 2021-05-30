import { IOption } from "./interfaces";


export const monthsOptions = [
    { key: '0', value: "January" },
    { key: '1', value: "February" },
    { key: '2', value: "March" },
    { key: '3', value: "April" },
    { key: '4', value: "May" },
    { key: '5', value: "June" },
    { key: '6', value: "Yuly" },
    { key: '7', value: "August" },
    { key: '8', value: "September" },
    { key: '9', value: "October" },
    { key: '10', value: "November" },
    { key: '11', value: "December" },
]

export const yearOptions = () => {
    const cantYearsBefore = 30;
    let arrayYears:IOption[] = [];
    let currentYear = new Date().getFullYear();
    for (let index = 0; index < cantYearsBefore; index++) {
        const year =  currentYear.toString();
        arrayYears.push({key: year.toString(), value: year.toString() })
        currentYear--;
    }
    return arrayYears
}