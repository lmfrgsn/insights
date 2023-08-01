export const blocks = [
    {
        title: "Likes",
        metric: "143",
        metricPrev: "120",
        delta: "34.3%",
        deltaType: "moderateIncrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.08404 2.57991C5.84727 2.26299 6.66554 2.09985 7.49195 2.09985C8.31836 2.09985 9.13663 2.26299 9.89986 2.57991C10.6631 2.89682 11.3562 3.36129 11.9396 3.94666L11.9428 3.94994L12.0001 4.00793L12.0573 3.94994L12.0606 3.94666C12.6439 3.36129 13.3371 2.89682 14.1003 2.57991C14.8635 2.26299 15.6818 2.09985 16.5082 2.09985C17.3346 2.09985 18.1529 2.26299 18.9161 2.57991C19.6791 2.89671 20.372 3.36097 20.9552 3.94606C23.4521 6.44364 23.5077 10.5732 20.549 13.5874L20.5426 13.5938L12.6938 21.4426C12.5098 21.6266 12.2603 21.73 12.0001 21.73C11.7399 21.73 11.4903 21.6266 11.3063 21.4426L3.45115 13.5874C0.492464 10.5733 0.548014 6.44363 3.04493 3.94605C3.62814 3.36096 4.32108 2.89671 5.08404 2.57991Z" fill="#D12E3C" />
                </svg>
            );
        },
        graphColor: "red"
    },
    {
        title: "Comments",
        metric: "32",
        metricPrev: "30",
        delta: "18.1%",
        deltaType: "moderateIncrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5374 21.951C22.4254 21.951 22.3434 21.9373 22.2888 21.91L18.27 20.6041C17.9941 20.5085 17.7373 20.5276 17.5023 20.6669C16.5352 21.1642 15.5134 21.5084 14.437 21.7024C13.3606 21.8963 12.2678 21.9373 11.1641 21.828C9.53582 21.6614 8.02229 21.1587 6.62623 20.3145C5.27389 19.5004 4.16743 18.4513 3.31232 17.1645C2.44354 15.8531 1.92719 14.438 1.76054 12.919C1.59389 11.4 1.77147 9.9329 2.28782 8.51772C2.8069 7.10255 3.62376 5.86222 4.74389 4.79947C5.86127 3.73672 7.16444 2.94444 8.64792 2.42809C10.1341 1.90901 11.675 1.71231 13.2787 1.83525C14.8796 1.95819 16.3795 2.40897 17.7728 3.18212C19.1388 3.92796 20.2726 4.91421 21.1714 6.14361C22.1112 7.38667 22.7041 8.75267 22.9527 10.2443C23.1193 11.2525 23.1275 12.2578 22.9827 13.2577C22.8379 14.2604 22.5292 15.2166 22.062 16.1263C21.9364 16.3613 21.9172 16.5744 21.9992 16.7684L23.2832 21.0576C23.3106 21.1942 23.3051 21.3281 23.2614 21.451C23.2204 21.5739 23.1494 21.6778 23.0538 21.7625C22.9144 21.8881 22.7423 21.9482 22.5347 21.9482L22.5374 21.951Z" fill="#748CB1" />
                </svg>
            );
        },
        graphColor: "slate"
    },
    {
        title: "Content Views",
        metric: "2948",
        metricPrev: "1,082",
        delta: "12.3%",
        deltaType: "moderateDecrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#167DBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#167DBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        },
        graphColor: "cyan"
    },
    {
        title: "Unique Content Views",
        metric: "659",
        metricPrev: "1,082",
        delta: "12.3%",
        deltaType: "moderateDecrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#167DBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#167DBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        },
        graphColor: "sky"
    },
    {
        title: "Shared Post Views",
        metric: "1",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateIncrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#748CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#748CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#748CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.59009 13.5098L15.4201 17.4898" stroke="#748CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.4101 6.50977L8.59009 10.4898" stroke="#748CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            );
        },
        graphColor: "zinc"

    },
    {
        title: "Recognition Posts",
        metric: "4",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateIncrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 14C15.8137 14 18.5 11.3137 18.5 8C18.5 4.68629 15.8137 2 12.5 2C9.18629 2 6.5 4.68629 6.5 8C6.5 11.3137 9.18629 14 12.5 14Z" stroke="#D4BC98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.977 12.8896L17.5 21.9996L12.5 18.9996L7.5 21.9996L9.023 12.8896" stroke="#D4BC98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        },
        graphColor: "amber"

    },
    {
        title: "User Generated Posts",
        metric: "9",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateDecrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z" stroke="#2476DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2V8H20" stroke="#2476DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        },
        graphColor: "blue"
    },
    {
        title: "File Downloads",
        metric: "3",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateDecrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 1.2002C13.0964 1.2002 13.58 1.68373 13.58 2.2802V12.6328L17.1363 9.07652C17.558 8.65475 18.2419 8.65475 18.6636 9.07652C19.0854 9.49829 19.0854 10.1821 18.6636 10.6039L13.2636 16.0039C12.8419 16.4256 12.158 16.4256 11.7363 16.0039L6.33628 10.6039C5.91451 10.1821 5.91451 9.49829 6.33628 9.07652C6.75804 8.65475 7.44186 8.65475 7.86363 9.07652L11.42 12.6328V2.2802C11.42 1.68373 11.9035 1.2002 12.5 1.2002ZM2.77995 14.1602C3.37642 14.1602 3.85995 14.6437 3.85995 15.2402V19.5602C3.85995 19.8466 3.97374 20.1213 4.17628 20.3239C4.37882 20.5264 4.65352 20.6402 4.93995 20.6402H20.06C20.3464 20.6402 20.6211 20.5264 20.8236 20.3239C21.0262 20.1213 21.14 19.8466 21.14 19.5602V15.2402C21.14 14.6437 21.6235 14.1602 22.22 14.1602C22.8164 14.1602 23.3 14.6437 23.3 15.2402V19.5602C23.3 20.4195 22.9586 21.2436 22.351 21.8512C21.7434 22.4588 20.9193 22.8002 20.06 22.8002H4.93995C4.08065 22.8002 3.25654 22.4588 2.64893 21.8512C2.04131 21.2436 1.69995 20.4195 1.69995 19.5602V15.2402C1.69995 14.6437 2.18348 14.1602 2.77995 14.1602Z" fill="#90BA23" />
                </svg>
            );
        },
        graphColor: "lime"

    },
    {
        title: "Video Plays",
        metric: "1",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateIncrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.45933 3.51448C3.93742 3.51448 3.51433 3.93757 3.51433 4.45948V19.5409C3.51433 20.0628 3.93742 20.4859 4.45933 20.4859H19.5408C20.0627 20.4859 20.4858 20.0628 20.4858 19.5409V4.45948C20.4858 3.93757 20.0627 3.51448 19.5408 3.51448H4.45933ZM1.20005 4.45948C1.20005 2.65943 2.65928 1.2002 4.45933 1.2002H19.5408C21.3408 1.2002 22.8 2.65943 22.8 4.45948V19.5409C22.8 21.341 21.3408 22.8002 19.5408 22.8002H4.45933C2.65928 22.8002 1.20005 21.341 1.20005 19.5409V4.45948Z" fill="#394DFF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.17805 1.2002C7.81712 1.2002 8.33519 1.71827 8.33519 2.35734V21.6431C8.33519 22.2821 7.81712 22.8002 7.17805 22.8002C6.53898 22.8002 6.02091 22.2821 6.02091 21.6431V2.35734C6.02091 1.71827 6.53898 1.2002 7.17805 1.2002Z" fill="#394DFF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.8218 1.2002C17.4609 1.2002 17.979 1.71827 17.979 2.35734V21.6431C17.979 22.2821 17.4609 22.8002 16.8218 22.8002C16.1828 22.8002 15.6647 22.2821 15.6647 21.6431V2.35734C15.6647 1.71827 16.1828 1.2002 16.8218 1.2002Z" fill="#394DFF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.19995 12.0011C1.19995 11.3621 1.71802 10.844 2.35709 10.844H21.6428C22.2819 10.844 22.7999 11.3621 22.7999 12.0011C22.7999 12.6402 22.2819 13.1583 21.6428 13.1583H2.35709C1.71802 13.1583 1.19995 12.6402 1.19995 12.0011Z" fill="#394DFF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.20005 7.18027C1.20005 6.5412 1.71812 6.02313 2.35719 6.02313H7.17862C7.81769 6.02313 8.33576 6.5412 8.33576 7.18027C8.33576 7.81935 7.81769 8.33742 7.17862 8.33742H2.35719C1.71812 8.33742 1.20005 7.81935 1.20005 7.18027Z" fill="#394DFF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.20005 16.822C1.20005 16.1829 1.71812 15.6649 2.35719 15.6649H7.17862C7.81769 15.6649 8.33576 16.1829 8.33576 16.822C8.33576 17.4611 7.81769 17.9791 7.17862 17.9791H2.35719C1.71812 17.9791 1.20005 17.4611 1.20005 16.822Z" fill="#394DFF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.6647 16.822C15.6647 16.1829 16.1828 15.6649 16.8218 15.6649H21.6433C22.2823 15.6649 22.8004 16.1829 22.8004 16.822C22.8004 17.4611 22.2823 17.9791 21.6433 17.9791H16.8218C16.1828 17.9791 15.6647 17.4611 15.6647 16.822Z" fill="#394DFF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.6647 7.18027C15.6647 6.5412 16.1828 6.02313 16.8218 6.02313H21.6433C22.2823 6.02313 22.8004 6.5412 22.8004 7.18027C22.8004 7.81935 22.2823 8.33742 21.6433 8.33742H16.8218C16.1828 8.33742 15.6647 7.81935 15.6647 7.18027Z" fill="#394DFF" />
                </svg>
            );
        },
        graphColor: "violet"

    },
    {
        title: "Audio Plays",
        metric: "4",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateIncrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 3.3602C10.2085 3.3602 8.01086 4.27048 6.39055 5.89079C4.77023 7.51111 3.85995 9.70872 3.85995 12.0002V18.4802C3.85995 19.0767 3.37642 19.5602 2.77995 19.5602C2.18348 19.5602 1.69995 19.0767 1.69995 18.4802V12.0002C1.69995 9.13586 2.83781 6.38884 4.8632 4.36344C6.88859 2.33805 9.63561 1.2002 12.5 1.2002C15.3643 1.2002 18.1113 2.33805 20.1367 4.36344C22.1621 6.38883 23.3 9.13586 23.3 12.0002V18.4802C23.3 19.0767 22.8164 19.5602 22.22 19.5602C21.6235 19.5602 21.14 19.0767 21.14 18.4802V12.0002C21.14 9.70872 20.2297 7.51111 18.6094 5.89079C16.989 4.27048 14.7914 3.3602 12.5 3.3602Z" fill="#7988A1" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.69995 14.1602C1.69995 13.5637 2.18348 13.0802 2.77995 13.0802H6.01995C6.87925 13.0802 7.70336 13.4216 8.31098 14.0292C8.9186 14.6368 9.25995 15.4609 9.25995 16.3202V19.5602C9.25995 20.4195 8.9186 21.2436 8.31098 21.8512C7.70336 22.4588 6.87925 22.8002 6.01995 22.8002H4.93995C4.08065 22.8002 3.25654 22.4588 2.64893 21.8512C2.04131 21.2436 1.69995 20.4195 1.69995 19.5602V14.1602ZM3.85995 15.2402V19.5602C3.85995 19.8466 3.97374 20.1213 4.17628 20.3239C4.37882 20.5264 4.65352 20.6402 4.93995 20.6402H6.01995C6.30639 20.6402 6.58109 20.5264 6.78363 20.3239C6.98617 20.1213 7.09995 19.8466 7.09995 19.5602V16.3202C7.09995 16.0338 6.98617 15.7591 6.78363 15.5565C6.58109 15.354 6.30639 15.2402 6.01995 15.2402H3.85995ZM18.98 15.2402C18.6935 15.2402 18.4188 15.354 18.2163 15.5565C18.0137 15.7591 17.9 16.0338 17.9 16.3202V19.5602C17.9 19.8466 18.0137 20.1213 18.2163 20.3239C18.4188 20.5264 18.6935 20.6402 18.98 20.6402H20.06C20.3464 20.6402 20.6211 20.5264 20.8236 20.3239C21.0262 20.1213 21.14 19.8466 21.14 19.5602V15.2402H18.98ZM16.6889 14.0292C17.2965 13.4216 18.1207 13.0802 18.98 13.0802H22.22C22.8164 13.0802 23.3 13.5637 23.3 14.1602V19.5602C23.3 20.4195 22.9586 21.2436 22.351 21.8512C21.7434 22.4588 20.9193 22.8002 20.06 22.8002H18.98C18.1207 22.8002 17.2965 22.4588 16.6889 21.8512C16.0813 21.2436 15.74 20.4195 15.74 19.5602V16.3202C15.74 15.4609 16.0813 14.6368 16.6889 14.0292Z" fill="#7988A1" />
                </svg>
            );
        },
        graphColor: "teal"

    },
    {
        title: "Competition Posts",
        metric: "2",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateDecrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9C2.79565 9 3.55871 9.31607 4.12132 9.87868C4.68393 10.4413 5 11.2044 5 12C5 12.7957 4.68393 13.5587 4.12132 14.1213C3.55871 14.6839 2.79565 15 2 15V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V15C21.2044 15 20.4413 14.6839 19.8787 14.1213C19.3161 13.5587 19 12.7957 19 12C19 11.2044 19.3161 10.4413 19.8787 9.87868C20.4413 9.31607 21.2044 9 22 9V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V9Z" stroke="#E08648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 5V7" stroke="#E08648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 17V19" stroke="#E08648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 11V13" stroke="#E08648" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        },
        graphColor: "yellow"

    },
    {
        title: "Event Posts",
        metric: "5",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateDecrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 4H5.5C4.39543 4 3.5 4.89543 3.5 6V20C3.5 21.1046 4.39543 22 5.5 22H19.5C20.6046 22 21.5 21.1046 21.5 20V6C21.5 4.89543 20.6046 4 19.5 4Z" stroke="#8D67B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 2V6" stroke="#8D67B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 2V6" stroke="#8D67B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 10H21.5" stroke="#8D67B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        },
        graphColor: "purple"

    },

    {
        title: "Compliance Posts",
        metric: "2",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateIncrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 22V15" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        },
        graphColor: "rose"

    },
    {
        title: "Planner Events",
        metric: "2",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateIncrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 4H5.5C4.39543 4 3.5 4.89543 3.5 6V20C3.5 21.1046 4.39543 22 5.5 22H19.5C20.6046 22 21.5 21.1046 21.5 20V6C21.5 4.89543 20.6046 4 19.5 4Z" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 2V6" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 2V6" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 10H21.5" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        },
        graphColor: "teal"

    },
    {
        title: "Planner Responses",
        metric: "19",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateDecrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9545 1.5956C13.4818 2.12281 13.4818 2.97758 12.9545 3.50479L5.80914 10.6502H21.45C22.1955 10.6502 22.8 11.2546 22.8 12.0002C22.8 12.7458 22.1955 13.3502 21.45 13.3502H5.80914L12.9545 20.4956C13.4818 21.0228 13.4818 21.8776 12.9545 22.4048C12.4273 22.932 11.5726 22.932 11.0454 22.4048L1.59536 12.9548C1.06815 12.4276 1.06815 11.5728 1.59536 11.0456L11.0454 1.5956C11.5726 1.06839 12.4273 1.06839 12.9545 1.5956Z" fill="#0891B2" />
                </svg>
            );
        },
        graphColor: "emerald"

    },
    {
        title: "Search Volume",
        metric: "192",
        metricPrev: "0",
        delta: "0",
        deltaType: "moderateDecrease",
        icon: function Icon() {
            return (
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.9625 21.0705L17.3093 15.4174C18.5328 13.9408 19.2078 12.0424 19.2078 9.9752C19.2078 5.16582 15.2421 1.2002 10.4328 1.2002C5.5812 1.2002 1.69995 5.16582 1.69995 9.9752C1.69995 14.8268 5.62339 18.7502 10.4328 18.7502C12.4578 18.7502 14.3562 18.0752 15.875 16.8518L21.5281 22.5049C21.739 22.7158 21.9921 22.8002 22.2875 22.8002C22.5406 22.8002 22.7937 22.7158 22.9625 22.5049C23.3843 22.1252 23.3843 21.4924 22.9625 21.0705ZM3.72495 9.9752C3.72495 6.2627 6.72026 3.2252 10.475 3.2252C14.1875 3.2252 17.225 6.2627 17.225 9.9752C17.225 13.7299 14.1875 16.7252 10.475 16.7252C6.72026 16.7252 3.72495 13.7299 3.72495 9.9752Z" fill="#8D33FF" />
                </svg>
            );
        },
        graphColor: "fuchsia"
    },

];


export const blocksViewsDay = [
    {
        hour: "00:00",
        Views: 0,
    },
    {
        hour: "01:00",
        Views: 0,
    },
    {
        hour: "02:00",
        Views: 0,
    },
    {
        hour: "03:00",
        Views: 0,
    },
    {
        hour: "04:00",
        Views: 0,
    },
    {
        hour: "05:00",
        Views: 0,
    },
    {
        hour: "06:00",
        Views: 0,
    },
    {
        hour: "07:00",
        Views: getRandomNumber(1, 6),
    },
    {
        hour: "08:00",
        Views: getRandomNumber(1, 7),
    },
    {
        hour: "09:00",
        Views: getRandomNumber(1, 8),
    },
    {
        hour: "10:00",
        Views: getRandomNumber(1, 35),
    },
    {
        hour: "11:00",
        Views: getRandomNumber(1, 35),
    },
    {
        hour: "12:00",
        Views: getRandomNumber(1, 35),
    },
    {
        hour: "13:00",
        Views: getRandomNumber(1, 35),
    },
    {
        hour: "14:00",
        Views: getRandomNumber(1, 35),
    },
    {
        hour: "15:00",
        Views: getRandomNumber(1, 35),
    },
    {
        hour: "16:00",
        Views: getRandomNumber(1, 35),
    },
    {
        hour: "17:00",
        Views: getRandomNumber(1, 35),
    },
    {
        hour: "18:00",
        Views: getRandomNumber(1, 25),
    },
    {
        hour: "19:00",
        Views: getRandomNumber(1, 20),
    },
    {
        hour: "20:00",
        Views: getRandomNumber(1, 10),
    },
    {
        hour: "21:00",
        Views: getRandomNumber(1, 8),
    },
    {
        hour: "22:00",
        Views: getRandomNumber(1, 7),
    },
    {
        hour: "23:00",
        Views: getRandomNumber(1, 5),
    },
];

export const blocksViewsWeek = [
    {
      day: "Sat",
      Views: 32,
    },
    {
      day: "Sun",
      Views: 12,
    },
    {
      day: "Mon",
      Views: 54,
    },
    {
      day: "Tue",
      Views: 43,
    },
    {
      day: "Wed",
      Views: 62,
    },
    {
      day: "Thur",
      Views: 84,
    },
    {
      day: "Fri",
      Views: 59,
    },
  ];

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}