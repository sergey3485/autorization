import * as React from 'react';

const Apple = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={16} height={20} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_1181_4176)">
        <path
          d="M15.49 6.818c-.113.09-2.126 1.244-2.126 3.81 0 2.968 2.561 4.018 2.638 4.044-.012.064-.407 1.438-1.35 2.838-.842 1.232-1.72 2.462-3.057 2.462s-1.68-.79-3.224-.79c-1.503 0-2.038.816-3.26.816-1.223 0-2.076-1.14-3.057-2.54C.918 15.814 0 13.26 0 10.836c0-3.888 2.485-5.95 4.93-5.95 1.299 0 2.382.868 3.198.868.776 0 1.987-.92 3.465-.92.56 0 2.573.052 3.898 1.984zm-4.599-3.63c.612-.738 1.044-1.762 1.044-2.786 0-.142-.012-.286-.037-.402-.995.038-2.178.674-2.892 1.516-.56.648-1.083 1.672-1.083 2.71 0 .156.026.312.038.362.063.012.165.026.267.026.892 0 2.015-.608 2.663-1.426z"
          fill="#171717"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1181_4176">
          <path fill="#fff" d="M0 0h16v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const MemoApple = React.memo(Apple);
export default MemoApple;
