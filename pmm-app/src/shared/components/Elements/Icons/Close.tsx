/* eslint max-len: 0 */

import React, { FC } from 'react';
import { useTheme } from '@grafana/ui';
import { cx } from 'emotion';
import { getStyles } from './Icons.styles';
import { SvgProps } from './Icons.types';

export const Close: FC<SvgProps> = ({ className, ...rest }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(className, styles.icon)}
      {...rest}
    >
      <g clipPath="url(#clip0)">
        <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0ZM11.5333 10.22C11.6273 10.3044 11.7031 10.4071 11.7561 10.5218C11.8091 10.6364 11.8382 10.7607 11.8415 10.887C11.8449 11.0132 11.8225 11.1389 11.7758 11.2562C11.729 11.3736 11.6588 11.4802 11.5695 11.5695C11.4802 11.6588 11.3736 11.729 11.2562 11.7758C11.1389 11.8225 11.0132 11.8449 10.887 11.8415C10.7607 11.8381 10.6364 11.8091 10.5218 11.7561C10.4071 11.7031 10.3044 11.6273 10.22 11.5333L8 9.31333L5.78 11.5333C5.69559 11.6273 5.59292 11.7031 5.47825 11.7561C5.36358 11.8091 5.23931 11.8381 5.11304 11.8415C4.98676 11.8449 4.86112 11.8225 4.74378 11.7758C4.62644 11.729 4.51985 11.6588 4.43053 11.5695C4.34121 11.4802 4.27102 11.3736 4.22424 11.2562C4.17747 11.1389 4.15509 11.0132 4.15847 10.887C4.16185 10.7607 4.19093 10.6364 4.24391 10.5218C4.2969 10.4071 4.37269 10.3044 4.46667 10.22L6.68667 8L4.46667 5.78C4.3076 5.60292 4.2225 5.37158 4.22887 5.13363C4.23524 4.89568 4.33261 4.66924 4.50093 4.50092C4.66924 4.33261 4.89569 4.23524 5.13364 4.22886C5.37159 4.22249 5.60292 4.3076 5.78 4.46667L8 6.68667L10.22 4.46667C10.3044 4.37269 10.4071 4.2969 10.5218 4.24391C10.6364 4.19092 10.7607 4.16185 10.887 4.15847C11.0132 4.15509 11.1389 4.17747 11.2562 4.22424C11.3736 4.27101 11.4802 4.3412 11.5695 4.43053C11.6588 4.51985 11.729 4.62643 11.7758 4.74377C11.8225 4.86112 11.8449 4.98676 11.8415 5.11303C11.8382 5.23931 11.8091 5.36357 11.7561 5.47824C11.7031 5.59291 11.6273 5.69559 11.5333 5.78L9.31334 8L11.5333 10.22Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
