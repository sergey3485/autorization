import * as React from 'react';

const Google = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={22} height={22} fill="none" {...props}>
      <path
        d="M20.68 11.23c0-.716-.064-1.403-.183-2.063H11v3.905h5.427a4.65 4.65 0 01-2.026 3.034v2.539h3.272c1.907-1.76 3.007-4.345 3.007-7.416z"
        fill="#4285F4"
      />
      <path
        d="M11 21.083c2.723 0 5.005-.898 6.673-2.438l-3.272-2.54c-.899.606-2.044.973-3.401.973-2.622 0-4.85-1.77-5.647-4.153H1.998v2.603c1.66 3.291 5.06 5.555 9.002 5.555z"
        fill="#34A853"
      />
      <path
        d="M5.353 12.916A6.042 6.042 0 015.033 11c0-.67.119-1.31.32-1.916V6.481H1.998A9.959 9.959 0 00.917 11c0 1.632.394 3.162 1.081 4.52l2.613-2.036.742-.568z"
        fill="#FBBC05"
      />
      <path
        d="M11 4.932c1.485 0 2.805.513 3.86 1.503l2.887-2.888C15.996 1.916 13.723.917 11 .917 7.058.917 3.657 3.18 1.998 6.48l3.355 2.603C6.151 6.701 8.378 4.932 11 4.932z"
        fill="#EA4335"
      />
    </svg>
  );
};

const MemoGoogle = React.memo(Google);
export default MemoGoogle;