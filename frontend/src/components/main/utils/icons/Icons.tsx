import React from 'react'
import { iconType } from './../../../../helpers/interfaces';

interface IIconsProps {
    icon: iconType
    style: string
}

const Icons: React.FC<IIconsProps> = ({
    icon,
    style
}) => {

    switch (icon) {
        case 'commercial':
            return (
                <svg version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200"
                    xmlSpace="preserve" className={style}>
                    <switch>
                        <g>
                            <g>
                                <g>
                                    <path className="st0" d="M95.68,123.45c-7.36,0-14.59,0-21.95,0c0,0.45,0,0.84,0,1.24c0,7.79,0,15.58,0,23.38
					c0,1.98-0.62,2.65-2.43,2.65c-7.96,0-15.91,0-23.87,0c-1.83,0-2.44-0.65-2.44-2.64c0-11,0-22,0-32.99
					c0-1.64,0.75-2.53,2.02-2.46c0.91,0.05,1.6,0.71,1.73,1.7c0.06,0.44,0.05,0.89,0.05,1.34c0,9.83,0,19.65,0,29.48
					c0,1.38,0,1.38,1.29,1.39c6.23,0,12.47-0.02,18.7,0.02c0.93,0.01,1.14-0.31,1.13-1.29c-0.03-7.72-0.02-15.45-0.02-23.17
					c0-2.31,0.56-2.92,2.69-2.92c8.08,0,16.16,0,24.25,0c2.11,0,2.65,0.6,2.65,2.95c0,7.76,0.01,15.51-0.02,23.27
					c0,0.93,0.25,1.15,1.06,1.15c17.51-0.02,35.02-0.03,52.54,0.01c0.92,0,1.07-0.36,1.07-1.25c-0.02-10.03-0.02-20.07-0.01-30.1
					c0-1.62,0.6-2.49,1.74-2.58c1.14-0.09,2,0.73,2.08,1.99c0.02,0.27,0.01,0.55,0.01,0.83c0,10.83,0,21.65,0,32.48
					c0,2.2-0.55,2.8-2.58,2.8c-19.05,0-38.09,0-57.14,0c-1.99,0-2.54-0.6-2.54-2.84c0-7.69,0-15.38,0-23.06
					C95.68,124.38,95.68,123.94,95.68,123.45z"/>
                                    <path className="st0" d="M59.37,150.94c-3.98,0-7.96,0-11.94,0c-1.96,0-2.65-0.75-2.65-2.85c0-11,0-22,0-32.99
					c0-0.97,0.26-1.72,0.74-2.18c0.38-0.36,0.9-0.53,1.51-0.5c1.02,0.06,1.79,0.82,1.93,1.89c0.05,0.4,0.05,0.81,0.05,1.21l0,29.64
					c0,1.17,0,1.17,1.08,1.17l4.68,0c4.6,0,9.35-0.01,14.03,0.03c0.01,0,0.02,0,0.03,0c0.37,0,0.58-0.05,0.7-0.17
					c0.14-0.13,0.19-0.4,0.19-0.9c-0.03-6.14-0.02-12.38-0.02-18.41l0-4.76c0-2.43,0.65-3.13,2.9-3.13c8.08,0,16.17,0,24.25,0
					c2.22,0,2.86,0.71,2.86,3.16l0,5.44c0,5.84,0,11.89-0.02,17.83c0,0.42,0.05,0.66,0.17,0.78c0.11,0.11,0.31,0.16,0.67,0.16
					c0,0,0,0,0,0c18.87-0.02,36.06-0.02,52.54,0c0.32,0.01,0.56-0.05,0.68-0.17c0.13-0.13,0.18-0.37,0.18-0.87
					c-0.02-9-0.02-18.01-0.01-27.01l0-3.09c0-2.18,1.05-2.72,1.93-2.79c0.57-0.05,1.11,0.12,1.53,0.48c0.46,0.4,0.73,1,0.78,1.71
					c0.01,0.2,0.01,0.4,0.01,0.6l0,0.24v32.48c0,2.31-0.65,3.01-2.79,3.01H98.22c-2.11,0-2.75-0.71-2.75-3.06
					c0-5.49,0-10.98,0-16.47v-7.74H73.95l0,24.41c0,2.09-0.72,2.86-2.64,2.86C67.32,150.94,63.34,150.94,59.37,150.94z
					 M46.87,112.84c-0.43,0-0.79,0.13-1.06,0.39c-0.4,0.37-0.61,1.02-0.61,1.87c0,11,0,22,0,32.99c0,1.86,0.52,2.42,2.23,2.42
					c7.96,0,15.91,0,23.87,0c1.7,0,2.22-0.57,2.22-2.44l0-24.83H95.9v8.17c0,5.49,0,10.98,0,16.47c0,2.11,0.46,2.63,2.32,2.63h57.14
					c1.9,0,2.37-0.51,2.37-2.58l0-32.72c0-0.19,0-0.38-0.01-0.57c-0.03-0.59-0.26-1.09-0.63-1.41c-0.33-0.28-0.76-0.41-1.22-0.38
					c-1.02,0.08-1.54,0.88-1.54,2.37l0,3.09c0,9-0.01,18.01,0.01,27.01c0,0.53-0.05,0.92-0.3,1.17c-0.2,0.2-0.5,0.29-0.97,0.29
					c0,0,0,0-0.01,0c-16.48-0.03-33.66-0.03-52.54,0c0,0,0,0,0,0c-0.34,0-0.73-0.03-0.97-0.28c-0.21-0.21-0.3-0.53-0.29-1.08
					c0.03-5.94,0.02-11.99,0.02-17.83l0-5.44c0-2.22-0.46-2.74-2.44-2.74c-8.08,0-16.16,0-24.25,0c-2.01,0-2.47,0.51-2.47,2.71
					l0,4.76c0,6.03-0.01,12.27,0.02,18.41c0,0.53-0.05,0.94-0.31,1.2c-0.21,0.21-0.52,0.3-1,0.3c-0.01,0-0.02,0-0.03,0
					c-4.67-0.03-9.42-0.03-14.02-0.03l-4.68,0c-1.41,0-1.5-0.1-1.5-1.6l0-29.64c0-0.38,0-0.78-0.05-1.15
					c-0.11-0.88-0.72-1.47-1.54-1.52C46.96,112.84,46.92,112.84,46.87,112.84z"/>
                                </g>
                                <g>
                                    <path className="st0" d="M192.94,100.25c-0.54,0.73-0.86,1.56-1.43,1.8c-0.62,0.27-1.49,0.07-2.22-0.08
					c-0.35-0.07-0.64-0.5-0.95-0.78c-13.22-11.86-26.45-23.72-39.66-35.61c-0.74-0.67-1.47-0.95-2.48-0.95
					c-18.67,0.06-37.35,0.08-56.02,0.12c-12.22,0.02-24.44,0.06-36.66,0.06c-0.79,0-1.34,0.25-1.91,0.78
					c-11.86,11.06-23.73,22.1-35.6,33.15c-0.3,0.28-0.59,0.58-0.93,0.82c-0.87,0.6-2.03,0.46-2.74-0.29
					c-0.71-0.76-0.77-1.91-0.11-2.74c0.19-0.24,0.43-0.45,0.66-0.66c12.4-11.54,24.79-23.09,37.21-34.6
					c0.42-0.39,1.14-0.66,1.71-0.66c23.23-0.06,46.46-0.08,69.69-0.1c8.87-0.01,17.74-0.03,26.61-0.07c0.77,0,1.36,0.2,1.94,0.72
					c13.8,12.41,27.62,24.79,41.43,37.2C192.03,98.82,192.38,99.49,192.94,100.25z"/>
                                    <path className="st0" d="M188.2,101.34l-5.7-5.11c-11.14-9.99-22.65-20.32-33.96-30.5c-0.71-0.64-1.37-0.92-2.33-0.9
					c-14.09,0.05-28.17,0.07-42.26,0.09l-24.19,0.05c-8.74,0.02-17.48,0.04-26.23,0.04c-0.71,0-1.22,0.21-1.76,0.72
					c-10.7,9.98-21.41,19.95-32.13,29.92l-3.66,3.41c-0.24,0.23-0.49,0.46-0.77,0.66c-0.94,0.65-2.23,0.51-3.01-0.32
					c-0.79-0.84-0.84-2.11-0.12-3.02c0.17-0.21,0.37-0.4,0.56-0.57l0.12-0.11l3.74-3.48c10.96-10.21,22.3-20.76,33.47-31.12
					c0.45-0.42,1.22-0.72,1.86-0.72c17.88-0.04,36.06-0.07,53.65-0.09l16.04-0.02c10.14-0.01,18.6-0.04,26.61-0.07
					c0.01,0,0.01,0,0.02,0c0.84,0,1.46,0.23,2.06,0.78c6.73,6.05,13.47,12.1,20.21,18.15c7.07,6.35,14.14,12.7,21.21,19.05
					c0.37,0.33,1.77,1.3,1.56,2.05c-0.21,0.75-1.16,1.8-1.61,1.99C190,103,188.29,101.42,188.2,101.34z M146.23,64.41
					c1.04,0,1.82,0.3,2.6,1.01c11.31,10.18,22.83,20.51,33.96,30.5l5.7,5.11c0.09,0.09,0.19,0.18,0.28,0.28
					c0.19,0.2,0.38,0.41,0.57,0.45l0.07,0.01c0.7,0.14,1.48,0.31,2.02,0.08c0.32-0.14,0.57-0.54,0.86-1c0.12-0.2,0.25-0.4,0.39-0.6
					c-0.15-0.21-0.29-0.41-0.42-0.61c-0.3-0.45-0.56-0.83-0.9-1.13c-7.07-6.35-14.14-12.7-21.21-19.05
					c-6.74-6.05-13.48-12.1-20.21-18.15c-0.53-0.47-1.04-0.67-1.78-0.67c-0.01,0-0.01,0-0.02,0c-8.01,0.04-16.47,0.06-26.61,0.07
					l-16.04,0.02c-17.58,0.02-35.77,0.04-53.65,0.09c-0.53,0-1.19,0.26-1.57,0.6C39.09,71.77,27.76,82.33,16.8,92.53l-3.86,3.6
					c-0.19,0.17-0.37,0.34-0.51,0.52c-0.59,0.74-0.54,1.78,0.1,2.47c0.63,0.68,1.69,0.79,2.46,0.26c0.25-0.17,0.49-0.4,0.72-0.61
					l0.19-0.18l3.47-3.23c10.71-9.97,21.43-19.94,32.13-29.92c0.63-0.58,1.24-0.83,2.05-0.83c8.74,0,17.48-0.02,26.22-0.04
					l24.19-0.05c14.09-0.02,28.17-0.05,42.26-0.09C146.22,64.41,146.22,64.41,146.23,64.41z"/>
                                </g>
                                <g>
                                    <path className="st0" d="M171.15,98.28c-0.36,1.15-0.63,2.34-1.1,3.43c-2.08,4.77-5.68,7.47-10.26,8.49
					c-6.17,1.38-11.57-0.31-15.78-5.62c-1.01-1.27-1.62-2.92-2.4-4.41c-0.17-0.32-0.28-0.68-0.45-1.12
					c-2.4,5.97-6.94,8.7-12.21,10.32c-5.93,1.82-11.89,1.79-17.79-0.13c-5.14-1.67-9.5-4.59-12.1-10.19
					c-2.42,7.92-7.68,11.52-14.84,11.55c-7.18,0.03-12.28-3.85-15.01-11.46c-0.25,0.61-0.42,1.07-0.61,1.52
					c-1.42,3.24-3.7,5.57-6.59,7.1c-7.39,3.93-14.85,3.97-22.26,0.06c-3.35-1.77-5.88-4.53-7.41-8.31c-0.16-0.4-0.3-0.81-0.31-1.4
					c0.23,0.15,0.51,0.25,0.69,0.45c4.26,4.58,9.53,6.4,15.31,6.89c4.51,0.38,8.94-0.04,13.25-1.63c2.81-1.04,5.3-2.66,7.24-5.16
					c0.52-0.68,0.9-0.64,1.44-0.02c3.1,3.54,6.75,6.04,11.26,6.69c6.63,0.95,12.43-0.79,16.94-6.52c0.59-0.75,0.97-0.83,1.65-0.12
					c3.31,3.42,7.37,5.13,11.75,6.01c7.06,1.43,14.08,1.29,21.01-0.89c3.09-0.97,5.88-2.56,8.03-5.27c0.57-0.72,0.94-0.32,1.37,0.16
					c2.59,2.89,5.51,5.24,9.17,6.16c7.39,1.85,13.92,0.34,19.11-6.15c0.18-0.23,0.43-0.4,0.65-0.59
					C170.96,98.15,171.05,98.22,171.15,98.28z"/>
                                    <path className="st0" d="M50.8,110.94c-3.73,0-7.46-0.98-11.17-2.93c-3.45-1.82-5.98-4.66-7.51-8.42c-0.19-0.46-0.31-0.89-0.33-1.47
					l-0.01-0.39l0.33,0.21c0.07,0.04,0.14,0.08,0.22,0.12c0.18,0.1,0.37,0.2,0.52,0.36c3.81,4.1,8.63,6.27,15.17,6.82
					c4.81,0.41,9.11-0.12,13.16-1.62c3.02-1.12,5.35-2.79,7.14-5.09c0.3-0.39,0.57-0.57,0.86-0.58c0.01,0,0.01,0,0.02,0
					c0.36,0,0.66,0.29,0.89,0.54c3.38,3.86,7.02,6.03,11.13,6.62c7.06,1.01,12.54-1.09,16.74-6.44c0.26-0.33,0.58-0.67,0.97-0.69
					c0.01,0,0.03,0,0.04,0c0.29,0,0.59,0.17,0.96,0.55c2.91,3.01,6.72,4.96,11.64,5.95c7.32,1.48,14.35,1.18,20.91-0.89
					c3.41-1.08,6.01-2.78,7.93-5.2c0.25-0.31,0.49-0.47,0.74-0.47c0.36-0.01,0.67,0.31,0.95,0.63c3.01,3.36,5.89,5.3,9.07,6.09
					c7.87,1.97,14.04-0.02,18.89-6.08c0.14-0.17,0.3-0.31,0.46-0.44c0.07-0.06,0.14-0.12,0.21-0.18l0.13-0.11l0.54,0.37l-0.05,0.15
					c-0.11,0.36-0.22,0.72-0.32,1.09c-0.23,0.79-0.46,1.6-0.79,2.36c-2.01,4.62-5.51,7.52-10.41,8.62c-6.47,1.45-11.85-0.47-16-5.7
					c-0.72-0.91-1.24-2.01-1.75-3.08c-0.22-0.46-0.43-0.92-0.67-1.36c-0.11-0.2-0.19-0.41-0.27-0.65
					c-2.15,4.95-5.91,8.03-12.14,9.95c-5.98,1.84-12.01,1.79-17.92-0.13c-5.79-1.88-9.61-5.01-11.99-9.82
					c-2.43,7.39-7.44,11.15-14.88,11.19c-0.03,0-0.06,0-0.09,0c-7.11,0-12.13-3.73-14.93-11.08l-0.03,0.07
					c-0.14,0.34-0.25,0.64-0.38,0.94c-1.38,3.16-3.63,5.58-6.68,7.21C58.35,109.94,54.57,110.94,50.8,110.94z M32.25,98.49
					c0.05,0.38,0.16,0.68,0.27,0.94c1.49,3.67,3.95,6.43,7.32,8.2c7.31,3.86,14.73,3.84,22.06-0.06c2.96-1.58,5.15-3.93,6.49-7
					c0.13-0.29,0.24-0.58,0.38-0.92l0.44-1.11l0.19,0.53c2.69,7.51,7.65,11.32,14.72,11.32c0.03,0,0.06,0,0.09,0
					c7.41-0.03,12.34-3.87,14.64-11.4l0.16-0.53l0.23,0.5c2.3,4.97,6.11,8.17,11.97,10.08c5.83,1.9,11.77,1.94,17.66,0.13
					c6.3-1.94,10.02-5.08,12.08-10.19l0.2-0.49l0.2,0.49c0.06,0.15,0.11,0.29,0.16,0.42c0.09,0.26,0.18,0.48,0.28,0.68
					c0.24,0.45,0.45,0.91,0.67,1.37c0.5,1.05,1.01,2.13,1.7,3c4.04,5.09,9.27,6.96,15.57,5.55c4.76-1.06,8.16-3.88,10.11-8.37
					c0.32-0.73,0.55-1.53,0.77-2.31c0.09-0.32,0.18-0.64,0.28-0.95l-0.01-0.01c-0.03,0.03-0.06,0.05-0.09,0.08
					c-0.15,0.12-0.29,0.24-0.4,0.38c-4.96,6.2-11.28,8.24-19.32,6.23c-3.26-0.82-6.21-2.79-9.28-6.22c-0.22-0.24-0.42-0.5-0.62-0.49
					c-0.12,0-0.26,0.11-0.42,0.31c-1.98,2.49-4.64,4.24-8.13,5.35c-6.62,2.09-13.73,2.39-21.12,0.9c-5.01-1.01-8.89-3-11.86-6.08
					c-0.29-0.3-0.53-0.43-0.67-0.42c-0.18,0.01-0.38,0.17-0.66,0.53c-4.3,5.48-9.91,7.64-17.13,6.6c-4.21-0.61-7.94-2.82-11.39-6.76
					c-0.24-0.27-0.43-0.43-0.57-0.4c-0.15,0-0.32,0.14-0.53,0.41c-1.84,2.37-4.24,4.08-7.33,5.23c-4.11,1.52-8.47,2.06-13.34,1.65
					c-6.65-0.57-11.55-2.78-15.44-6.96C32.47,98.62,32.37,98.55,32.25,98.49z"/>
                                </g>
                                <g>
                                    <path className="st0" d="M129.54,138.58c-4.26,0-8.52,0-12.77,0c-2.43,0-3.57-1.25-3.57-3.91c-0.01-4.62-0.01-9.23,0-13.85
					c0-2.61,1.15-3.89,3.5-3.89c8.55-0.01,17.09-0.01,25.64,0c2.28,0,3.49,1.33,3.5,3.82c0.01,4.69,0.01,9.37,0,14.06
					c-0.01,2.45-1.21,3.77-3.43,3.78C138.12,138.59,133.83,138.58,129.54,138.58z M116.29,135.14c8.84,0,17.62,0,26.38,0
					c0-4.99,0-9.89,0-14.76c-8.84,0-17.6,0-26.38,0C116.29,125.33,116.29,130.21,116.29,135.14z"/>
                                    <path className="st0" d="M137.12,138.79c-1.22,0-2.44,0-3.65,0l-3.92,0l-3.7,0c-3.03,0-6.05,0-9.08,0c-2.54,0-3.78-1.35-3.78-4.13
					c-0.01-4.62-0.01-9.23,0-13.85c0-2.72,1.25-4.1,3.71-4.1c8.55-0.01,17.09-0.01,25.64,0c2.39,0,3.7,1.43,3.71,4.03
					c0.01,4.81,0.01,9.54,0,14.06c-0.01,2.56-1.3,3.98-3.64,3.99C140.65,138.79,138.88,138.79,137.12,138.79z M129.54,138.36l3.92,0
					c2.98,0,5.96,0,8.94-0.01c2.1-0.01,3.21-1.24,3.22-3.57c0.01-4.52,0.01-9.25,0-14.06c-0.01-2.39-1.11-3.6-3.29-3.61
					c-8.55-0.01-17.1-0.01-25.64,0c-2.24,0-3.29,1.17-3.29,3.68c-0.01,4.62-0.01,9.23,0,13.85c0,2.56,1.04,3.7,3.36,3.7
					c3.03,0,6.05,0,9.08,0L129.54,138.36z M142.88,135.35h-26.8v-15.19h26.8V135.35z M116.51,134.92h25.95v-14.34h-25.95V134.92z"/>
                                </g>
                            </g>
                        </g>
                    </switch>
                </svg >
            )
        case 'home':
            return (
                <svg version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200"
                    xmlSpace="preserve" className={style}>
                    <switch>
                        <g >
                            <g>
                                <path className="st0" d="M164.97,174.4H95.39c-1.81,0-3.27-1.45-3.27-3.25v-42.51H67.99v42.51c0,1.79-1.47,3.25-3.27,3.25H35.04
                                c-1.81,0-3.27-1.45-3.27-3.25v-56.79c0-1.79,1.47-3.25,3.27-3.25s3.27,1.45,3.27,3.25v53.54h23.13V125.4
                                c0-1.79,1.47-3.25,3.27-3.25h30.68c1.81,0,3.27,1.45,3.27,3.25v42.51h63.03v-53.54c0-1.79,1.47-3.25,3.27-3.25
                                c1.81,0,3.27,1.45,3.27,3.25v56.79C168.24,172.95,166.77,174.4,164.97,174.4z"/>
                                <path className="st0" d="M182.16,114.87c-0.84,0-1.68-0.32-2.31-0.95L100,34.78l-79.85,79.14c-1.28,1.27-3.35,1.27-4.63,0
                                c-1.28-1.27-1.28-3.32,0-4.59L100,25.6l84.48,83.73c1.28,1.27,1.28,3.32,0,4.59C183.84,114.55,183,114.87,182.16,114.87z"/>
                                <path className="st0" d="M142.77,124.78v22.37H120.2v-22.37H142.77 M142.77,118.29H120.2c-3.62,0-6.55,2.91-6.55,6.49v22.37
                                c0,3.58,2.93,6.49,6.55,6.49h22.57c3.62,0,6.55-2.91,6.55-6.49v-22.37C149.32,121.2,146.39,118.29,142.77,118.29L142.77,118.29z"
                                />
                                <path className="st0" d="M155.61,88.6c-1.81,0-3.27-1.45-3.27-3.25V54.12h-14.68c-1.81,0-3.27-1.45-3.27-3.25
                                c0-1.79,1.47-3.25,3.27-3.25h21.23v37.73C158.89,87.15,157.42,88.6,155.61,88.6z"/>
                            </g>
                        </g>
                    </switch>
                </svg>
            )
        case 'refinance':
            return (
                <svg version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200"
                    xmlSpace="preserve" className={style}>
                    <switch>
                        <g>
                            <g>
                                <path className="st0" d="M29.82,135.78c0-10.13-0.01-20.27,0-30.4c0-3.29,0.59-3.89,3.86-3.9c5.28-0.02,10.56-0.02,15.84,0
				c3.19,0.01,3.99,0.85,4,4.14c0.02,3.92-0.02,7.83,0.01,11.75c0.03,2.92,0.75,3.37,3.36,2.14c4.73-2.22,9.62-3.85,14.83-4.43
				c6.49-0.73,12.19,0.43,16.12,6.32c3.35,5.02,8.34,5.66,13.8,4.95c4.16-0.54,8.3-0.68,12.39,0.6c5.04,1.58,8.67,4.66,10.34,9.72
				c0.56,1.68,1.44,2.01,3.05,1.75c8.16-1.33,16.01-3.89,23.99-5.95c2.9-0.75,5.79-1.21,8.82-0.9c7.77,0.8,10.78,9.97,9.55,15.54
				c-0.33,1.5-1.74,2.24-3.02,2.95c-8.42,4.69-17.38,8.15-26.4,11.44c-8.71,3.17-17.49,6.11-26.58,8
				c-6.68,1.39-13.19,0.2-19.68-1.32c-12.5-2.93-24.77-6.69-37.02-10.52c-3.07-0.96-3.55-0.59-3.57,2.69
				c-0.01,2.3,0.02,4.6-0.02,6.9c-0.04,1.83-0.94,2.83-2.86,2.82c-6.05-0.01-12.09-0.02-18.14,0c-2.38,0.01-2.71-1.47-2.71-3.4
				C29.84,156.39,29.82,146.09,29.82,135.78z M74.6,120.94c-6.85,0.42-13.12,2.6-18.9,6.26c-1.56,0.99-2.22,2.4-2.2,4.31
				c0.08,5.36,0.08,10.73,0,16.1c-0.03,1.82,0.59,2.76,2.37,3.32c12.98,4.06,25.96,8.14,39.21,11.24c4.77,1.12,9.61,2.83,14.57,1.86
				c17.8-3.46,34.61-9.89,50.98-17.54c3.86-1.8,4.21-3.53,1.76-7.07c-1.23-1.77-3.05-2.13-4.97-1.91c-1.76,0.21-3.52,0.62-5.24,1.08
				c-8.71,2.3-17.33,4.97-26.28,6.26c-0.49,0.07-1.11,0.1-1.44,0.4c-4.19,3.82-9.59,4.92-14.73,6.56c-2.46,0.78-5.01,0.68-7.55-0.05
				c-8.58-2.45-17.19-4.81-25.78-7.22c-2.77-0.78-3.75-2.02-3.21-3.98c0.54-1.98,2.09-2.59,4.75-1.86
				c6.47,1.79,13.12,3.11,19.36,5.51c6.94,2.67,13.24,1.98,19.56-1.34c0.15-0.08,0.3-0.16,0.46-0.21c1.59-0.44,1.84-1.57,1.55-2.99
				c-0.76-3.63-3.14-5.76-6.51-6.86c-3.49-1.14-7.07-0.77-10.63-0.34c-7.64,0.92-14.27-0.8-18.83-7.48
				C80.84,121.96,78.08,120.83,74.6,120.94z M35.61,135.72c0,8.51,0.06,17.03-0.04,25.54c-0.03,2.37,0.82,3.25,3.14,3.07
				c1.78-0.13,3.57-0.02,5.36-0.03c3.32-0.01,3.43-0.1,3.43-3.44c0-14.47,0-28.94,0-43.41c0-2.47-0.07-4.94,0.02-7.41
				c0.06-1.88-0.72-2.61-2.58-2.51c-2.04,0.1-4.1,0.15-6.13-0.01c-2.45-0.2-3.29,0.69-3.25,3.18
				C35.69,119.04,35.61,127.38,35.61,135.72z"/>
                                <path className="st0" d="M125.82,29.91c19.18-1.05,40.62,13.13,43.9,36.76c3.68,26.48-14.64,45.32-35.28,49.06
				c-22.92,4.15-44.73-9.62-50.56-31.61c-0.17-0.65-0.33-1.33-0.37-2c-0.08-1.58,0.74-2.64,2.22-3.01c1.6-0.4,2.86,0.25,3.5,1.81
				c0.32,0.78,0.48,1.63,0.73,2.44c5.14,17.25,20.81,27.9,39.56,26.88c16.53-0.9,30.97-13.95,34.13-30.85
				c3.85-20.6-11.76-41.25-32.66-43.39c-5.7-0.58-11.19-0.06-16.62,1.62c-2.36,0.73-4.08,0.07-4.55-1.81
				c-0.54-2.18,0.66-3.28,2.62-3.94C116.93,30.35,121.51,29.65,125.82,29.91z"/>
                                <path className="st0" d="M126.83,58.3c-2.68,0.05-4.96,1.6-5.69,3.95c-0.83,2.69,0.68,4.35,2.64,5.78c1.45,1.06,3.1,1.75,4.75,2.44
				c2.37,0.99,4.6,2.21,6.49,3.98c5.93,5.54,4.73,14.4-2.55,18.07c-1.57,0.79-2.62,1.51-2.73,3.47c-0.09,1.61-1.31,2.55-3.02,2.48
				c-1.68-0.08-2.76-1.03-2.82-2.7c-0.06-1.57-0.88-2.19-2.19-2.71c-2.96-1.18-5.15-3.24-6.47-6.19c-0.82-1.84-0.49-3.38,1.35-4.3
				c1.79-0.89,3.08-0.07,4.05,1.5c1.91,3.08,4.21,4.22,7.41,3.64c2.18-0.4,3.75-1.68,4.44-3.78c0.69-2.11-0.16-3.82-1.79-5.2
				c-1.45-1.22-3.11-2.07-4.85-2.77c-2.38-0.96-4.65-2.11-6.63-3.75c-6.67-5.53-5.62-14.86,2.17-18.71
				c1.49-0.74,2.56-1.41,2.55-3.32c0-1.58,1.18-2.43,2.7-2.52c1.66-0.1,2.94,0.76,3.08,2.41c0.16,1.83,1.08,2.57,2.65,3.22
				c2.77,1.13,4.79,3.17,6.02,5.95c0.75,1.71,0.59,3.29-1.11,4.19c-1.74,0.92-3.35,0.46-4.26-1.42
				C131.77,59.4,129.59,58.39,126.83,58.3z"/>
                                <path className="st0" d="M75.18,53.69c-3.68-0.01-5.19-0.87-5.24-2.99c-0.05-2.2,1.57-3.15,5.35-3.15c3.68,0,5.15,0.85,5.2,3
				C80.56,52.79,79.01,53.7,75.18,53.69z"/>
                                <path className="st0" d="M97.78,53.61c-0.85,0-1.7,0.06-2.54-0.01c-1.8-0.16-2.83-1.27-2.83-2.99c0-1.74,1.11-2.83,2.87-2.98
				c1.43-0.12,2.88-0.11,4.31-0.05c1.94,0.08,3.34,1.01,3.32,3.06c-0.02,2.05-1.4,2.95-3.36,3.02c-0.59,0.02-1.18,0-1.78,0
				C97.78,53.65,97.78,53.63,97.78,53.61z"/>
                                <path className="st0" d="M83.48,39.23c0-3.64,0.9-5.16,3.03-5.11c2.13,0.05,3.03,1.59,3.02,5.22c0,0.85,0.06,1.71-0.07,2.54
				c-0.26,1.72-1.3,2.86-3.06,2.8c-1.85-0.07-2.92-1.2-2.92-3.15C83.48,40.75,83.48,39.99,83.48,39.23z"/>
                                <path className="st0" d="M89.6,61.91c-0.07,0.93-0.04,1.87-0.23,2.77c-0.34,1.62-1.47,2.54-3.09,2.42c-1.57-0.12-2.69-1.04-2.77-2.77
				c-0.06-1.52-0.04-3.05-0.03-4.57c0.01-1.92,1.03-3.09,2.91-3.15c1.91-0.06,2.91,1.18,3.11,3.01c0.08,0.75,0.01,1.52,0.01,2.28
				C89.55,61.9,89.57,61.91,89.6,61.91z"/>
                            </g>
                        </g>
                    </switch>
                </svg>
            )
    }
}

export default Icons
