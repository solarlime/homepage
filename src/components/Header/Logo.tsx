import React from 'react';

export default function Logo(props: {
  className: string,
  green: string,
  notGreen: string
}): React.ReactElement {
  const { className, green, notGreen } = props;
  return (
    <svg
      className={className}
      height="100%"
      strokeMiterlimit="10"
      style={{
        fillRule: 'nonzero', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round',
      }}
      version="1.1"
      viewBox="0 0 1094.08 235.866"
      width="100%"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <clipPath id="ArtboardFrame">
        <rect height="235.866" width="1094.08" x="0" y="0" />
      </clipPath>
      <g clipPath="url(#ArtboardFrame)" id="Слой-1">
        <g opacity="1">
          <path
            d="M61.6 218.453C41.0667 218.453 25.9933 214.3 16.38 205.993C6.76667 197.686 1.30667 186.066-6.75016e-14 171.133L34.16 171.133C35.6533 178.226 38.2667 183.406 42 186.673C45.7333 189.94 51.8 191.573 60.2 191.573C68.9733 191.573 75.04 190.22 78.4 187.513C81.76 184.806 83.44 181.213 83.44 176.733C83.44 172.066 81.4333 168.473 77.42 165.953C73.4067 163.433 68.4133 161.333 62.44 159.653C56.4667 157.973 50.0267 156.34 43.12 154.753C36.2133 153.166 29.7733 150.833 23.8 147.753C17.8267 144.673 12.8333 140.52 8.82 135.293C4.80667 130.066 2.8 122.973 2.8 114.013C2.8 108.226 3.92 102.86 6.16 97.9131C8.4 92.9664 11.76 88.6731 16.24 85.0331C20.72 81.3931 26.3667 78.5464 33.18 76.4931C39.9933 74.4397 48.0667 73.4131 57.4 73.4131C76.8133 73.4131 91.0933 77.4264 100.24 85.4531C109.387 93.4797 114.707 104.306 116.2 117.933L82.04 117.933C80.5467 111.96 78.0733 107.526 74.62 104.633C71.1667 101.74 65.4267 100.293 57.4 100.293C49.7467 100.293 44.4267 101.506 41.44 103.933C38.4533 106.36 36.96 109.626 36.96 113.733C36.96 118.213 38.9667 121.526 42.98 123.673C46.9933 125.82 51.9867 127.64 57.96 129.133C63.9333 130.626 70.3733 132.166 77.28 133.753C84.1867 135.34 90.6267 137.72 96.6 140.893C102.573 144.066 107.567 148.406 111.58 153.913C115.593 159.42 117.6 166.933 117.6 176.453C117.6 182.426 116.433 187.98 114.1 193.113C111.767 198.246 108.313 202.68 103.74 206.413C99.1667 210.146 93.38 213.086 86.38 215.233C79.38 217.38 71.12 218.453 61.6 218.453Z"
            fill={notGreen}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M196.4 218.733C175.307 218.733 158.833 212.713 146.98 200.673C135.127 188.633 129.2 171.413 129.2 149.013L129.2 142.853C129.2 131.84 130.74 122.04 133.82 113.453C136.9 104.866 141.38 97.5864 147.26 91.6131C153.14 85.6397 160.187 81.0664 168.4 77.8931C176.613 74.7197 185.947 73.1331 196.4 73.1331C217.493 73.1331 233.967 79.1531 245.82 91.1931C257.673 103.233 263.6 120.453 263.6 142.853L263.6 149.013C263.6 160.026 262.06 169.826 258.98 178.413C255.9 187 251.42 194.28 245.54 200.253C239.66 206.226 232.567 210.8 224.26 213.973C215.953 217.146 206.667 218.733 196.4 218.733ZM196.4 189.053C206.667 189.053 214.74 185.833 220.62 179.393C226.5 172.953 229.44 162.826 229.44 149.013L229.44 142.853C229.44 129.413 226.453 119.38 220.48 112.753C214.507 106.126 206.48 102.813 196.4 102.813C186.133 102.813 178.06 106.033 172.18 112.473C166.3 118.913 163.36 129.04 163.36 142.853L163.36 149.013C163.36 162.453 166.347 172.486 172.32 179.113C178.293 185.74 186.32 189.053 196.4 189.053Z"
            fill={green}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M329.52 215.933C321.867 215.933 315.427 215 310.2 213.133C304.973 211.266 300.68 208.84 297.32 205.853C293.96 202.866 291.347 199.553 289.48 195.913C287.613 192.273 286.26 188.773 285.42 185.413C284.58 182.053 284.067 178.973 283.88 176.173C283.693 173.373 283.6 171.226 283.6 169.733L283.6 19.9331L316.08 19.9331L316.08 166.373C316.08 179.626 322.52 186.253 335.4 186.253L342.4 186.253L342.4 215.933L329.52 215.933Z"
            fill={notGreen}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M398.8 218.733C382.187 218.733 369.867 215 361.84 207.533C353.813 200.066 349.8 189.706 349.8 176.453C349.8 169.546 350.92 163.293 353.16 157.693C355.4 152.093 359.04 147.333 364.08 143.413C369.12 139.493 375.653 136.46 383.68 134.313C391.707 132.166 401.413 131.093 412.8 131.093L440.52 131.093L440.52 123.533C440.52 116.253 438.373 110.606 434.08 106.593C429.787 102.58 423.16 100.573 414.2 100.573C405.24 100.573 398.8 102.206 394.88 105.473C390.96 108.74 388.627 112.893 387.88 117.933L355.4 117.933C355.773 111.586 357.267 105.66 359.88 100.153C362.493 94.6464 366.227 89.8864 371.08 85.8731C375.933 81.8597 381.953 78.7331 389.14 76.4931C396.327 74.2531 404.68 73.1331 414.2 73.1331C434.173 73.1331 448.967 77.7064 458.58 86.8531C468.193 95.9997 473 109.16 473 126.333L473 215.933L447.8 215.933L444.72 197.733L444.16 197.733C438.747 204.453 432.12 209.633 424.28 213.273C416.44 216.913 407.947 218.733 398.8 218.733ZM404.4 191.293C409.627 191.293 414.433 190.453 418.82 188.773C423.207 187.093 426.987 184.806 430.16 181.913C433.333 179.02 435.853 175.566 437.72 171.553C439.587 167.54 440.52 163.2 440.52 158.533L440.52 155.173L414.2 155.173C403 155.173 395.16 156.993 390.68 160.633C386.2 164.273 383.96 169.173 383.96 175.333C383.96 180 385.593 183.826 388.86 186.813C392.127 189.8 397.307 191.293 404.4 191.293Z"
            fill={notGreen}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M500 75.9331L525.2 75.9331L528 92.7331L528.56 92.7331C534.16 85.8264 540.32 80.8331 547.04 77.7531C553.76 74.6731 561.88 73.1331 571.4 73.1331L584 73.1331L584 102.813L567.2 102.813C556 102.813 547.413 105.66 541.44 111.353C535.467 117.046 532.48 124.84 532.48 134.733L532.48 215.933L500 215.933L500 75.9331Z"
            fill={notGreen}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M642.92 215.933C635.267 215.933 628.827 215 623.6 213.133C618.373 211.266 614.08 208.84 610.72 205.853C607.36 202.866 604.747 199.553 602.88 195.913C601.013 192.273 599.66 188.773 598.82 185.413C597.98 182.053 597.467 178.973 597.28 176.173C597.093 173.373 597 171.226 597 169.733L597 19.9331L629.48 19.9331L629.48 166.373C629.48 179.626 635.92 186.253 648.8 186.253L655.8 186.253L655.8 215.933L642.92 215.933Z"
            fill={green}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M671.6 75.9331L704.08 75.9331L704.08 215.933L671.6 215.933L671.6 75.9331ZM687.84 59.1331C681.867 59.1331 676.873 57.1264 672.86 53.1131C668.847 49.0997 666.84 44.1064 666.84 38.1331C666.84 32.1597 668.847 27.1664 672.86 23.1531C676.873 19.1397 681.867 17.1331 687.84 17.1331C693.813 17.1331 698.807 19.1397 702.82 23.1531C706.833 27.1664 708.84 32.1597 708.84 38.1331C708.84 44.1064 706.833 49.0997 702.82 53.1131C698.807 57.1264 693.813 59.1331 687.84 59.1331Z"
            fill={green}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M733.88 75.9331L759.08 75.9331L761.88 92.7331L762.44 92.7331C767.853 86.3864 773.967 81.5331 780.78 78.1731C787.593 74.8131 794.92 73.1331 802.76 73.1331C812.28 73.1331 820.773 75.0464 828.24 78.8731C835.707 82.6997 841.68 88.4397 846.16 96.0931C851.013 88.8131 857.313 83.1664 865.06 79.1531C872.807 75.1397 881.627 73.1331 891.52 73.1331C907.387 73.1331 920.08 78.3131 929.6 88.6731C939.12 99.0331 943.88 114.386 943.88 134.733L943.88 215.933L911.4 215.933L911.4 134.733C911.4 123.906 909.02 115.88 904.26 110.653C899.5 105.426 892.92 102.813 884.52 102.813C876.12 102.813 869.12 105.706 863.52 111.493C857.92 117.28 855.12 125.026 855.12 134.733L855.12 215.933L822.64 215.933L822.64 134.733C822.64 124.093 820.213 116.113 815.36 110.793C810.507 105.473 803.973 102.813 795.76 102.813C787.36 102.813 780.36 105.706 774.76 111.493C769.16 117.28 766.36 125.026 766.36 134.733L766.36 215.933L733.88 215.933L733.88 75.9331Z"
            fill={green}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
          <path
            d="M1029.68 218.733C1008.59 218.733 992.113 212.713 980.26 200.673C968.407 188.633 962.48 171.413 962.48 149.013L962.48 142.853C962.48 131.84 964.02 121.993 967.1 113.313C970.18 104.633 974.567 97.3064 980.26 91.3331C985.953 85.3597 992.86 80.8331 1000.98 77.7531C1009.1 74.6731 1018.2 73.1331 1028.28 73.1331C1048.63 73.1331 1064.68 79.1997 1076.44 91.3331C1088.2 103.466 1094.08 121.106 1094.08 144.253L1094.08 156.013L995.24 156.013C996.173 168.333 999.253 177.293 1004.48 182.893C1009.71 188.493 1017.64 191.293 1028.28 191.293C1045.08 191.293 1055.35 185.506 1059.08 173.933L1092.68 173.933C1089.51 188.493 1082.46 199.6 1071.54 207.253C1060.62 214.906 1046.67 218.733 1029.68 218.733ZM1028.28 100.573C1018.39 100.573 1010.83 103.046 1005.6 107.993C1000.37 112.94 997.013 120.92 995.52 131.933L1061.04 131.933C1059.73 120.92 1056.47 112.94 1051.24 107.993C1046.01 103.046 1038.36 100.573 1028.28 100.573Z"
            fill={green}
            fillRule="nonzero"
            opacity="1"
            stroke="none"
          />
        </g>
        <path
          d="M236.942 69.7183C234.765 69.676 232.302 70.2564 229.692 71.187C226.818 71.7332 224.007 72.4752 220.473 72.8745C215.808 73.4018 211.06 74.2899 206.63 75.8433C211.806 77.2235 216.448 79.2141 221.067 81.7183C230.745 85.0295 238.026 89.2713 244.661 95.9058C246.066 97.311 246.995 98.6954 248.536 101.312C248.68 101.557 248.676 101.541 248.817 101.781C249.428 102.818 249.692 102.979 250.098 103.562C250.683 103.943 251.452 104.457 251.567 104.531C252.601 105.197 253.155 105.717 254.005 106.312C253.818 104.593 253.686 102.849 253.536 101.5C253.293 99.3159 253.466 96.5552 252.598 94.5308C251.572 92.136 249.483 90.3206 248.848 87.7808C248.663 87.037 248.548 86.1544 248.411 85.3433C248.164 79.1189 246.59 74.322 243.286 71.812C242.469 71.1912 241.562 70.6826 240.598 70.3433C239.477 69.9484 238.244 69.7436 236.942 69.7183Z"
          fill={green}
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M142.448 193.853C142.239 200.355 143.6 205.631 146.917 209.041C147.972 211.957 149.581 214.417 152.073 216.072C157.585 219.731 165.927 219.497 175.76 216.103C162.118 210.13 154.738 205.968 147.385 199.228C146.299 198.232 144.113 195.861 142.448 193.853Z"
          fill={green}
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
      </g>
    </svg>
  );
}
