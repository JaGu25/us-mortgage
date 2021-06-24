import axios from "../config/axios";
import { IOption } from "./interfaces";


export const monthsOptions = [
    { key: '0', value: "January" },
    { key: '1', value: "February" },
    { key: '2', value: "March" },
    { key: '3', value: "April" },
    { key: '4', value: "May" },
    { key: '5', value: "June" },
    { key: '6', value: "July" },
    { key: '7', value: "August" },
    { key: '8', value: "September" },
    { key: '9', value: "October" },
    { key: '10', value: "November" },
    { key: '11', value: "December" },
]

export const yearOptions = (lenth = 30) => {
    const cantYearsBefore = lenth;
    let arrayYears: IOption[] = [];
    let currentYear = new Date().getFullYear();
    for (let index = 0; index < cantYearsBefore; index++) {
        const year = currentYear.toString();
        arrayYears.push({ key: year.toString(), value: year.toString() })
        currentYear--;
    }
    return arrayYears
}

export const RESIDENTIAL = "residential";
export const COMMERCIAL = "commercial";


export const getDataByType = async (type: string) => {
    let res = await axios().get(`/apply?type=${type}`);
    return res.data.data
}

export const downloadInfo = async (type: string, startDate: string, endDate: string) => {
    const response = await axios()({
        method: 'GET',
        url: `apply/download?type=${type}&start_date=${startDate}&end_date=${endDate}`,
        responseType: 'blob',
        headers: {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${type}-data.xlsx`); //or any other extension
    document.body.appendChild(link);
    link.click();
}