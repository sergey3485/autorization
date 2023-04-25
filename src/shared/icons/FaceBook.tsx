import * as React from 'react';

const FaceBook = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_1181_3716)">
        <path
          d="M8.35 19.9C3.6 19.05 0 14.95 0 10 0 4.5 4.5 0 10 0s10 4.5 10 10c0 4.95-3.6 9.05-8.35 9.9l-.55-.45H8.9l-.55.45z"
          fill="url(#prefix__paint0_linear_1181_3716)"
        />
        <path
          d="M13.9 12.8l.45-2.8H11.7V8.05c0-.8.3-1.4 1.5-1.4h1.3V4.1c-.7-.1-1.5-.2-2.2-.2-2.3 0-3.9 1.4-3.9 3.9V10H5.9v2.8h2.5v7.05a9.206 9.206 0 003.3 0V12.8h2.2z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1181_3716"
          x1={10.001}
          y1={19.305}
          x2={10.001}
          y2={-0.004}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0062E0" />
          <stop offset={1} stopColor="#19AFFF" />
        </linearGradient>
        <clipPath id="prefix__clip0_1181_3716">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const MemoFaceBook = React.memo(FaceBook);
export default MemoFaceBook;
