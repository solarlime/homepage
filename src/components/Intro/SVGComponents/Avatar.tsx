export default function Avatar(props: {
  className: string;
  green: string;
  notGreen: string;
}) {
  const { className, green, notGreen } = props;
  return (
    <svg
      className={className}
      height="100%"
      strokeMiterlimit="10"
      style={{
        fillRule: 'nonzero',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      version="1.1"
      viewBox="0 0 217 237"
      width="100%"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>solarlime.dev avatar</title>
      <defs>
        <path
          d="M90.9872 126.181C90.9872 126.181 91.0218 126.523 91.3416 127.008C92.3441 128.531 95.995 131.643 108.8 131.695C121.605 131.643 125.256 128.531 126.258 127.008C126.578 126.523 126.613 126.181 126.613 126.181C126.613 126.181 124.927 126.181 124.777 126.181C118.065 126.181 95.4398 126.181 92.8233 126.181C92.6729 126.181 90.9872 126.181 90.9872 126.181Z"
          id="Fill"
        />
        <path
          d="M121.084 81.8875C122.083 79.9236 126.654 78.8268 131.138 78.8268C135.606 78.8268 139.058 79.6821 141.173 81.1886C142.118 81.8614 141.319 82.2356 140.571 82.8504C139.576 83.6684 134.97 84.8104 131.388 84.8014C126.458 84.789 123.723 83.6602 122.319 83.1791C121.309 82.833 120.564 82.9089 121.084 81.8875Z"
          id="Fill_2"
        />
        <path
          d="M127.13 81.9066C127.13 79.5502 129.04 77.64 131.397 77.64C133.753 77.64 135.663 79.5502 135.663 81.9066C135.663 84.263 133.753 86.1732 131.397 86.1732C129.04 86.1732 127.13 84.263 127.13 81.9066Z"
          id="Fill_3"
        />
        <path
          d="M96.5409 81.8875C95.5419 79.9236 90.9709 78.8268 86.4873 78.8268C82.0195 78.8268 78.5673 79.6821 76.4518 81.1886C75.5071 81.8614 76.306 82.2356 77.0541 82.8504C78.0493 83.6684 82.6552 84.8104 86.2371 84.8014C91.1668 84.789 93.9022 83.6602 95.3065 83.1791C96.3164 82.833 97.0606 82.9089 96.5409 81.8875Z"
          id="Fill_4"
        />
        <path
          d="M90.4949 81.9066C90.4949 79.5502 88.5847 77.64 86.2283 77.64C83.8719 77.64 81.9617 79.5502 81.9617 81.9066C81.9617 84.263 83.8719 86.1732 86.2283 86.1732C88.5847 86.1732 90.4949 84.263 90.4949 81.9066Z"
          id="Fill_5"
        />
        <path
          d="M154.18 21.1372C151.696 18.5991 145.767 16.2361 142.962 14.0759C142.343 13.5997 141.715 13.135 141.109 12.6407C140.972 12.5283 138.508 11.0334 138.823 10.142C139.272 8.86897 142.1 4.72739 140.048 3.85411C139.146 3.47001 137.536 4.49216 136.67 4.82975C134.977 5.49045 133.263 6.05392 131.512 6.53978C132.351 4.86871 133.95 1.52355 130.944 2.41887C128.603 3.11641 126.421 4.90977 124.068 5.75346C124.847 4.47736 127.96 0.523141 125.147 0.302103C124.271 0.233255 121.724 1.87534 120.782 2.22561C117.959 3.27494 115.075 3.95315 112.111 4.48733C102.033 6.30364 90.2475 5.78577 80.9231 10.3741C73.7345 13.9113 65.1833 18.4918 61.0306 25.4807C57.0281 32.2172 54.9863 39.6805 54.1485 47.3999C53.5338 53.0651 53.8471 59.6475 54.1346 65.3332C54.2285 67.196 56.0725 75.8738 58.7788 73.2732C60.1271 71.9775 61.7831 57.9114 62.9098 54.5004C64.8954 48.4895 67.2377 45.6867 72.1842 41.5468C75.3586 38.8904 76.3475 35.6309 82.6051 33.6539C85.9068 32.6108 94.412 31.9509 97.8292 31.963C104.711 31.9878 110.165 31.5137 116.95 30.3444C122.951 29.3103 130.008 28.3708 131.587 28.7767C136.652 30.0783 142.882 35.8659 145.426 37.8425C150.731 41.964 152.559 46.98 154.17 53.4209C155.775 59.838 155.325 65.7913 157.312 72.1063C157.662 73.2166 158.586 75.1305 159.726 73.415C159.937 73.0965 160.535 71.3451 160.535 70.3374C160.535 66.2696 162.065 63.7195 162.423 58.0928C163.213 45.669 163.492 30.6505 154.18 21.1372Z"
          id="Fill_6"
        />
      </defs>
      <g id="Layer">
        <g opacity="1">
          <g opacity="1">
            <g opacity="1">
              <clipPath clipRule="evenodd" id="ClipPath">
                <path d="M0.8 129C0.8 69.3532 49.1532 21 108.8 21C168.447 21 216.8 69.3532 216.8 129C216.8 188.647 168.447 237 108.8 237C49.1532 237 0.8 188.647 0.8 129Z" />
              </clipPath>
              <g clipPath="url(#ClipPath)">
                <path
                  d="M0.8 21L217.245 21L217.245 21L217.245 237L217.245 237L0.8 237L0.8 237L0.8 21L0.8 21Z"
                  fill={green}
                  fillRule="evenodd"
                  opacity="1"
                  stroke="none"
                />
              </g>
            </g>
          </g>
          <g opacity="1">
            <clipPath clipRule="evenodd" id="ClipPath_2">
              <path d="M-10 129L-10-15L227.6-15L227.6 129L216.8 129C216.8 188.647 168.447 237 108.8 237C49.1532 237 0.8 188.647 0.8 129L0.8 129L-10 129Z" />
            </clipPath>
            <g clipPath="url(#ClipPath_2)">
              <g opacity="1">
                <g opacity="1">
                  <g opacity="1">
                    <g opacity="1">
                      <clipPath clipRule="nonzero" id="ClipPath_3">
                        <path d="M108.812 17.4062C101.854 17.4062 95.2179 18.824 89.1875 21.375C83.1647 23.9228 77.745 27.603 73.1875 32.1562C70.9089 34.4368 68.8412 36.9433 67.0312 39.625C61.6013 47.67 58.4375 57.3743 58.4375 67.8125L58.4375 73.3438C58.426 73.3457 58.4177 73.3418 58.4062 73.3438C57.7074 73.4635 57.3046 73.7967 56.7812 74.0312C56.3568 74.2193 55.8075 74.3041 55.4688 74.5625C53.2684 76.3178 53.1229 79.6406 52.7188 84C52.6508 84.7329 52.6971 85.2144 52.6875 85.8125L52.6875 87.75C52.9941 90.6373 54.2354 92.3127 56.2812 96.5938C59.0627 102.414 58.601 106.54 63.8438 107.281C67.6889 123.441 69.1756 130.667 71.5625 135.438C72.3602 137.032 73.3621 138.343 74.5 139.625C74.5165 139.645 74.5147 139.668 74.5312 139.688C78.2637 144.119 83.5249 148.62 83.5312 148.625L83.5312 166.906L82.5 166.906C80.337 166.907 79.2064 167.029 77.1562 167.219C77.0965 167.224 77.0614 167.213 77 167.219C72.6354 167.619 68.4075 168.406 64.3438 169.562C64.3341 169.565 64.3222 169.56 64.3125 169.562C62.2932 170.138 60.3355 170.812 58.4062 171.562C58.3971 171.566 58.3842 171.559 58.375 171.562C57.4105 171.938 56.4991 172.396 55.5625 172.812C54.6192 173.232 53.636 173.602 52.7188 174.062C50.8789 174.987 49.133 176.009 47.4062 177.094C45.6896 178.173 44.0005 179.333 42.4062 180.562C42.3995 180.568 42.3817 180.557 42.375 180.562C40.7812 181.793 39.2729 183.096 37.8125 184.469C34.8801 187.226 32.2047 190.279 29.875 193.562C22.8858 203.413 18.8125 215.486 18.8125 228.906L18.8125 237L198.812 237L198.812 228.906C198.813 215.486 194.739 203.414 187.75 193.562C185.42 190.279 182.745 187.226 179.812 184.469C178.347 183.091 176.818 181.796 175.219 180.562C173.625 179.333 171.966 178.172 170.25 177.094C170.243 177.089 170.226 177.098 170.219 177.094C168.492 176.009 166.746 174.987 164.906 174.062C164.898 174.058 164.883 174.067 164.875 174.062C163.961 173.603 162.999 173.229 162.062 172.812C159.233 171.555 156.322 170.428 153.281 169.562C151.262 168.987 149.193 168.486 147.094 168.094C147.084 168.092 147.073 168.096 147.062 168.094C144.963 167.702 142.824 167.42 140.656 167.219C140.595 167.213 140.53 167.224 140.469 167.219C138.419 167.029 137.288 166.907 135.125 166.906L134.094 166.906L134.094 148.625C134.1 148.62 139.361 144.119 143.094 139.688C143.108 139.672 143.111 139.641 143.125 139.625C144.263 138.343 145.265 137.032 146.062 135.438C148.449 130.667 149.936 123.441 153.781 107.281C159.024 106.54 158.562 102.414 161.344 96.5938C163.39 92.3127 164.631 90.6373 164.938 87.75L164.938 85.8125C164.928 85.2144 164.974 84.7329 164.906 84C164.502 79.6406 164.357 76.3178 162.156 74.5625C161.818 74.3041 161.268 74.2193 160.844 74.0312C160.32 73.7967 159.918 73.4635 159.219 73.3438C159.207 73.3418 159.199 73.3457 159.188 73.3438L159.188 67.8125C159.188 57.3743 156.024 47.67 150.594 39.625C148.784 36.9433 146.716 34.4368 144.438 32.1562C139.88 27.603 134.46 23.9228 128.438 21.375C122.41 18.824 115.771 17.4063 108.812 17.4062Z" />
                      </clipPath>
                      <g clipPath="url(#ClipPath_3)">
                        <path
                          d="M-10.3919 17.4267L227.992 17.4267L227.992 17.4267L227.992 237.782L227.992 237.782L-10.3919 237.782L-10.3919 237.782L-10.3919 17.4267L-10.3919 17.4267Z"
                          fill="#f8d5ce"
                          fillRule="evenodd"
                          opacity="1"
                          stroke="none"
                        />
                        <path
                          d="M83.0625 148.281L82.8438 155.625C82.8437 155.625 84.1042 156.544 84.4688 156.781C90.302 160.582 96.9714 166.875 108.812 166.875C120.654 166.875 127.323 160.582 133.156 156.781C133.521 156.544 134.781 155.625 134.781 155.625L134.562 148.281C134.562 148.281 133.433 149.101 133.156 149.281C128.781 152.132 122.835 155.203 115.969 156.562C113.681 157.016 111.278 157.281 108.812 157.281C98.9494 157.281 90.302 153.082 84.4688 149.281C84.1918 149.101 83.0625 148.281 83.0625 148.281Z"
                          fill="#efcac3"
                          fillRule="nonzero"
                          opacity="1"
                          stroke="none"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g opacity="1">
                <g opacity="1">
                  <clipPath clipRule="nonzero" id="ClipPath_4">
                    <path d="M83.5 151C80.0348 151.505 76.7821 152.166 73.8438 153.031C73.0583 153.262 72.3639 153.549 71.625 153.812C70.9736 154.045 70.2687 154.241 69.6562 154.5C69.6444 154.505 69.6368 154.526 69.625 154.531C68.3372 155.078 67.1592 155.666 66.0625 156.344C66.0434 156.356 66.019 156.363 66 156.375C64.9157 157.05 63.9346 157.805 63.0625 158.625C62.1765 159.457 61.3929 160.376 60.75 161.375C60.1072 162.374 59.5938 163.474 59.2188 164.656C58.8392 165.853 58.6112 167.129 58.5312 168.531C58.5293 168.566 58.5018 168.59 58.5 168.625C58.4927 168.822 58.4622 169.005 58.4375 169.188C58.4285 169.191 58.4152 169.184 58.4062 169.188C58.3846 169.197 58.3653 169.21 58.3438 169.219C35.0861 179.009 6.15625 178.245 6.15625 205.062L6.15625 237L18.8125 237L198.812 237L211.469 237L211.469 205.062C211.469 178.245 182.539 179.009 159.281 169.219C159.26 169.21 159.24 169.196 159.219 169.188C159.21 169.184 159.196 169.191 159.188 169.188C159.163 169.005 159.132 168.822 159.125 168.625C159.123 168.59 159.096 168.566 159.094 168.531C159.014 167.129 158.786 165.853 158.406 164.656C158.031 163.474 157.518 162.374 156.875 161.375C156.232 160.376 155.449 159.457 154.562 158.625C153.69 157.805 152.709 157.05 151.625 156.375C151.606 156.363 151.582 156.356 151.562 156.344C150.473 155.671 149.278 155.075 148 154.531C147.98 154.523 147.958 154.509 147.938 154.5C147.575 154.347 147.157 154.237 146.781 154.094C145.805 153.722 144.845 153.344 143.781 153.031C140.844 152.165 137.589 151.506 134.125 151C134.114 150.998 134.104 151.002 134.094 151L134.094 166.812C134.094 172.057 131.503 176.861 127.594 180.594C123.685 184.327 118.458 186.99 113.156 187.969C111.759 188.253 110.293 188.406 108.812 188.406C107.321 188.406 105.875 188.256 104.469 187.969C104.459 187.967 104.447 187.971 104.438 187.969C103.122 187.726 101.819 187.379 100.531 186.938C100.522 186.934 100.509 186.941 100.5 186.938C99.2117 186.495 97.9408 185.935 96.7188 185.312C96.7108 185.308 96.6955 185.317 96.6875 185.312C95.4655 184.689 94.3043 183.972 93.1875 183.188C93.1809 183.183 93.1629 183.192 93.1562 183.188C92.0396 182.402 91.0037 181.521 90.0312 180.594C89.054 179.66 88.1357 178.651 87.3438 177.594C84.968 174.423 83.5313 170.746 83.5312 166.812L83.5312 151C83.5205 151.002 83.5107 150.998 83.5 151Z" />
                  </clipPath>
                  <g clipPath="url(#ClipPath_4)">
                    <path
                      d="M-10 138L228.491 138L228.491 138L228.491 237L228.491 237L-10 237L-10 237L-10 138L-10 138Z"
                      fill="#282c34"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                  </g>
                </g>
                <g opacity="1">
                  <clipPath clipRule="evenodd" id="ClipPath_5">
                    <path d="M130.401 149.764C146.691 151.587 159.2 156.597 159.2 169.569L159.194 169.18C182.467 179.01 198.8 202.047 198.8 228.9L198.8 237L18.8 237L18.8 228.9C18.8 202.047 35.1327 179.01 58.4058 169.18C58.6526 156.496 71.0735 151.568 87.1997 149.764L87.2 166.8C87.2 178.729 96.8706 188.4 108.8 188.4C120.729 188.4 130.4 178.729 130.4 166.8L130.4 166.8L130.401 149.764Z" />
                  </clipPath>
                  <g clipPath="url(#ClipPath_5)">
                    <path
                      d="M81.7998 193.565L81.8 237L75.5 237L75.499 190.335C77.4826 191.514 79.5916 192.594 81.7998 193.565ZM142.101 190.334L142.1 226.65C142.1 228.39 140.69 229.8 138.95 229.8C137.21 229.8 135.8 228.39 135.8 226.65L135.801 193.565C138.009 192.594 140.118 191.513 142.101 190.334Z"
                      fill={notGreen}
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                  </g>
                </g>
                <g opacity="1">
                  <clipPath clipRule="evenodd" id="ClipPath_6">
                    <path d="M130.401 149.764C146.691 151.587 159.2 156.597 159.2 169.569L159.194 169.18C182.467 179.01 198.8 202.047 198.8 228.9L198.8 237L18.8 237L18.8 228.9C18.8 202.047 35.1327 179.01 58.4058 169.18C58.6526 156.496 71.0735 151.568 87.1997 149.764L87.2 166.8C87.2 178.729 96.8706 188.4 108.8 188.4C120.729 188.4 130.4 178.729 130.4 166.8L130.4 166.8L130.401 149.764Z" />
                  </clipPath>
                  <g clipPath="url(#ClipPath_6)">
                    <path
                      d="M145.733 149.451C159.28 152.013 168.65 157.118 168.65 167.077C168.65 184.818 138.916 199.2 108.8 199.2C78.6839 199.2 48.95 184.818 48.95 167.077C48.95 157.118 58.3196 152.013 71.8667 149.451C63.6891 152.466 58.4 157.534 58.4 165.969C58.4 184.322 83.4391 199.2 108.8 199.2C134.161 199.2 159.2 184.322 159.2 165.969C159.2 157.71 154.13 152.679 146.241 149.642L145.733 149.451Z"
                      fill="#000000"
                      fillOpacity="0.16"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                  </g>
                </g>
              </g>
              <g opacity="1">
                <g opacity="1">
                  <g opacity="1">
                    <path
                      d="M90.9872 126.181C90.9872 126.181 91.0218 126.523 91.3416 127.008C92.3441 128.531 95.995 131.643 108.8 131.695C121.605 131.643 125.256 128.531 126.258 127.008C126.578 126.523 126.613 126.181 126.613 126.181C126.613 126.181 124.927 126.181 124.777 126.181C118.065 126.181 95.4398 126.181 92.8233 126.181C92.6729 126.181 90.9872 126.181 90.9872 126.181Z"
                      fill="#000000"
                      fillOpacity="0.7"
                      fillRule="nonzero"
                      opacity="1"
                      stroke="#ffcdcd"
                      strokeLinecap="butt"
                      strokeLinejoin="round"
                      strokeWidth="3.01"
                    />
                    <g opacity="1">
                      <use
                        fill="#000000"
                        fillOpacity="0.7"
                        fillRule="nonzero"
                        opacity="1"
                        stroke="none"
                        xlinkHref="#Fill"
                      />
                      <clipPath clipRule="nonzero" id="ClipPath_7">
                        <use xlinkHref="#Fill" />
                      </clipPath>
                      <g clipPath="url(#ClipPath_7)">
                        <path
                          d="M99.0524 115.571L118.534 115.571C121.095 115.571 123.172 117.648 123.172 120.209L123.172 125.776C123.172 128.337 121.095 130.414 118.534 130.414L99.0524 130.414C96.4907 130.414 94.414 128.337 94.414 125.776L94.414 120.209C94.414 117.648 96.4907 115.571 99.0524 115.571Z"
                          fill="#ffffff"
                          fillRule="evenodd"
                          opacity="1"
                          stroke="none"
                        />
                        <path
                          d="M99.0524 130.572L118.534 130.572C121.095 130.572 123.172 132.649 123.172 135.21L123.172 140.776C123.172 143.338 121.095 145.415 118.534 145.415L99.0524 145.415C96.4907 145.415 94.414 143.338 94.414 140.776L94.414 135.21C94.414 132.649 96.4907 130.572 99.0524 130.572Z"
                          fill="#ffffff"
                          fillRule="evenodd"
                          opacity="1"
                          stroke="none"
                        />
                      </g>
                    </g>
                  </g>
                  <g opacity="1">
                    <path
                      d="M108.816 134.504C103.143 134.504 107.459 141.406 97.2949 145.792C96.5892 146.097 96.0024 146.419 95.1469 146.696C92.3964 147.586 88.3007 148.192 83.5279 148.63C83.8765 148.867 84.0999 149.042 84.4717 149.284C90.3147 153.085 98.9533 157.267 108.816 157.267C118.679 157.267 127.328 153.085 133.161 149.284C133.525 149.047 133.73 148.863 134.072 148.63C129.299 148.192 125.202 147.586 122.453 146.696C121.598 146.419 121.01 146.097 120.305 145.792C110.152 141.406 114.49 134.504 108.816 134.504Z"
                      fill="#a19167"
                      fillOpacity="0.501247"
                      fillRule="nonzero"
                      opacity="1"
                      stroke="none"
                    />
                    <path
                      d="M87.145 122.582C87.145 120.532 96.8403 118.871 108.8 118.871L108.8 118.871C120.76 118.871 130.455 120.532 130.455 122.582"
                      fill="#a19167"
                      fillOpacity="0.501247"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                  </g>
                </g>
                <g opacity="1">
                  <path
                    d="M57.4417 73.6744C57.4417 73.6744 63.8397 108.946 64.766 111C65.5777 106.795 69.06 118.829 71.2817 120.987C71.2817 120.987 68.8377 115.513 65.7888 106.3C63.0501 98.0233 59.8234 86.7293 57.4417 73.6744Z"
                    fill="#efcac3"
                    fillRule="nonzero"
                    opacity="1"
                    stroke="none"
                  />
                  <path
                    d="M160.183 73.6744C160.183 73.6744 153.785 108.946 152.859 111C152.047 106.795 148.565 118.829 146.343 120.987C146.343 120.987 148.787 115.513 151.836 106.3C154.575 98.0233 157.802 86.7293 160.183 73.6744Z"
                    fill="#efcac3"
                    fillRule="nonzero"
                    opacity="1"
                    stroke="none"
                  />
                </g>
                <g opacity="1">
                  <path
                    d="M115.018 79.8297L115.018 107.004C115.018 111.039 113.721 114.285 111.998 115.125C116.723 114.767 120.742 113.898 119.845 112.002C115.155 102.084 115.748 89.1004 115.018 79.8297Z"
                    fill="#efcac3"
                    fillRule="nonzero"
                    opacity="1"
                    stroke="none"
                  />
                  <path
                    d="M102.571 74.5141C102.571 70.7785 104.295 67.7503 106.422 67.7503L111.178 67.7503C113.305 67.7503 115.029 70.7785 115.029 74.5141L115.029 108.638C115.029 112.374 113.305 115.402 111.178 115.402L106.422 115.402C104.295 115.402 102.571 112.374 102.571 108.638L102.571 74.5141Z"
                    fill="#f8d5ce"
                    fillRule="nonzero"
                    opacity="0"
                    stroke="none"
                  />
                  <path
                    d="M102.582 79.8297L102.582 107.004C102.582 111.039 103.879 114.285 105.602 115.125C100.877 114.767 96.8584 113.898 97.7553 112.002C102.445 102.084 101.852 89.1004 102.582 79.8297Z"
                    fill="#efcac3"
                    fillRule="nonzero"
                    opacity="1"
                    stroke="none"
                  />
                </g>
                <g opacity="1">
                  <g opacity="1">
                    <path
                      d="M146.902 80.567L142.014 81.9683C145.593 81.943 146.981 82.0797 146.981 82.0797L142.085 82.1874C144.102 82.5033 146.156 84.5949 146.156 84.5949C146.156 84.5949 143.712 82.087 140.175 82.2557C140.175 82.2557 139.374 82.6061 141.025 81.8839C142.677 81.1616 146.782 79.3667 146.782 79.3667L141.949 81.773C143.987 81.1759 146.902 80.567 146.902 80.567Z"
                      fill="#dfbbb3"
                      fillRule="nonzero"
                      opacity="1"
                      stroke="none"
                    />
                    <path
                      d="M121.045 82.7208C119.881 80.8498 126.641 84.7074 131.125 84.7074C135.592 84.7074 139.454 83.1451 141.57 81.6385C141.908 81.3977 141.875 82.0762 140.897 83.0567C139.859 84.0974 137.8 85.4745 135.532 86.3186C134.677 86.6369 130.276 87.593 126.542 86.188C123.283 84.9615 121.831 83.9856 121.045 82.7208Z"
                      fill="#efcac3"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                    <path
                      d="M121.084 81.8875C122.083 79.9236 126.654 78.8268 131.138 78.8268C135.606 78.8268 139.507 80.1541 141.622 81.6606C142.32 82.1571 140.382 79.0477 135.843 77.8247C132.198 76.8423 129.145 76.6953 125.411 78.1003C122.152 79.3268 120.564 82.9089 121.084 81.8875Z"
                      fill="#efcac3"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                    <use
                      fill="#ffffff"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                      xlinkHref="#Fill_2"
                    />
                    <clipPath clipRule="evenodd" id="ClipPath_8">
                      <use xlinkHref="#Fill_2" />
                    </clipPath>
                    <g clipPath="url(#ClipPath_8)">
                      <g opacity="1">
                        <g opacity="1">
                          <use
                            fill="#527083"
                            fillRule="nonzero"
                            stroke="none"
                            xlinkHref="#Fill_3"
                          />
                          <mask
                            height="8.53317"
                            id="StrokeMask"
                            maskUnits="userSpaceOnUse"
                            width="8.53317"
                            x="127.13"
                            y="77.64"
                          >
                            <rect
                              fill="#000000"
                              height="8.53317"
                              stroke="none"
                              width="8.53317"
                              x="127.13"
                              y="77.64"
                            />
                            <use
                              fill="#ffffff"
                              fillRule="evenodd"
                              stroke="none"
                              xlinkHref="#Fill_3"
                            />
                          </mask>
                          <use
                            fill="none"
                            mask="url(#StrokeMask)"
                            stroke="#395262"
                            strokeLinecap="butt"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            xlinkHref="#Fill_3"
                          />
                        </g>
                        <path
                          d="M128.972 81.9066C128.972 80.5677 130.058 79.4824 131.397 79.4824C132.736 79.4824 133.821 80.5677 133.821 81.9066C133.821 83.2454 132.736 84.3308 131.397 84.3308C130.058 84.3308 128.972 83.2454 128.972 81.9066Z"
                          fill="#160a0a"
                          fillRule="nonzero"
                          opacity="1"
                          stroke="none"
                        />
                        <path
                          d="M132.2 80.4468C132.2 80.1879 132.41 79.978 132.669 79.978C132.928 79.978 133.138 80.1879 133.138 80.4468C133.138 80.7058 132.928 80.9157 132.669 80.9157C132.41 80.9157 132.2 80.7058 132.2 80.4468Z"
                          fill="#ffffff"
                          fillRule="nonzero"
                          opacity="1"
                          stroke="none"
                        />
                      </g>
                    </g>
                  </g>
                  <g opacity="1">
                    <path
                      d="M70.7232 80.5669L75.611 81.9682C72.0318 81.9429 70.6441 82.0796 70.6441 82.0796L75.5402 82.1872C73.5225 82.5031 71.4687 84.5947 71.4687 84.5947C71.4687 84.5947 73.9132 82.0869 77.4498 82.2556C77.4498 82.2556 78.2511 82.606 76.5995 81.8838C74.9479 81.1615 70.8433 79.3667 70.8433 79.3667L75.6756 81.7729C73.6381 81.1758 70.7232 80.5669 70.7232 80.5669Z"
                      fill="#dfbbb3"
                      fillRule="nonzero"
                      opacity="1"
                      stroke="none"
                    />
                    <path
                      d="M96.5803 82.7208C97.7439 80.8498 90.9841 84.7074 86.5005 84.7074C82.0327 84.7074 78.1708 83.1451 76.0554 81.6385C75.7171 81.3977 75.75 82.0762 76.7278 83.0567C77.7655 84.0974 79.8247 85.4745 82.0929 86.3186C82.9485 86.6369 87.3486 87.593 91.0827 86.188C94.3421 84.9615 95.7938 83.9856 96.5803 82.7208Z"
                      fill="#efcac3"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                    <path
                      d="M96.5409 81.8875C95.5419 79.9236 90.9709 78.8268 86.4873 78.8268C82.0195 78.8268 78.118 80.1541 76.0026 81.6606C75.3054 82.1571 77.2433 79.0477 81.7819 77.8247C85.4275 76.8423 88.48 76.6953 92.2141 78.1003C95.4735 79.3268 97.0606 82.9089 96.5409 81.8875Z"
                      fill="#efcac3"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                    <use
                      fill="#ffffff"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                      xlinkHref="#Fill_4"
                    />
                    <clipPath clipRule="evenodd" id="ClipPath_9">
                      <use xlinkHref="#Fill_4" />
                    </clipPath>
                    <g clipPath="url(#ClipPath_9)">
                      <g opacity="1">
                        <g opacity="1">
                          <use
                            fill="#527083"
                            fillRule="nonzero"
                            stroke="none"
                            xlinkHref="#Fill_5"
                          />
                          <mask
                            height="8.53317"
                            id="StrokeMask_2"
                            maskUnits="userSpaceOnUse"
                            width="8.53317"
                            x="81.9617"
                            y="77.64"
                          >
                            <rect
                              fill="#000000"
                              height="8.53317"
                              stroke="none"
                              width="8.53317"
                              x="81.9617"
                              y="77.64"
                            />
                            <use
                              fill="#ffffff"
                              fillRule="evenodd"
                              stroke="none"
                              xlinkHref="#Fill_5"
                            />
                          </mask>
                          <use
                            fill="none"
                            mask="url(#StrokeMask_2)"
                            stroke="#395262"
                            strokeLinecap="butt"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            xlinkHref="#Fill_5"
                          />
                        </g>
                        <path
                          d="M88.6525 81.9066C88.6525 80.5677 87.5672 79.4824 86.2283 79.4824C84.8894 79.4824 83.8041 80.5677 83.8041 81.9066C83.8041 83.2454 84.8894 84.3308 86.2283 84.3308C87.5672 84.3308 88.6525 83.2454 88.6525 81.9066Z"
                          fill="#160a0a"
                          fillRule="nonzero"
                          opacity="1"
                          stroke="none"
                        />
                        <path
                          d="M85.425 80.4468C85.425 80.1879 85.2151 79.978 84.9562 79.978C84.6972 79.978 84.4873 80.1879 84.4873 80.4468C84.4873 80.7058 84.6972 80.9157 84.9562 80.9157C85.2151 80.9157 85.425 80.7058 85.425 80.4468Z"
                          fill="#ffffff"
                          fillRule="nonzero"
                          opacity="1"
                          stroke="none"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g opacity="1">
                  <path
                    d="M133.709 65.4716C139.096 65.7204 147.805 69.6349 147.581 75.0673C147.573 75.2451 147.312 75.3232 147.185 75.1864C144.629 72.4411 126.483 69.667 120.092 71.1371C119.507 71.2718 119.062 70.6948 119.433 70.2779C122.607 66.708 128.883 65.2439 133.709 65.4716"
                    fill="#d4c08c"
                    fillRule="evenodd"
                    opacity="1"
                    stroke="none"
                  />
                  <path
                    d="M83.8911 65.4716C78.5041 65.7204 69.7949 69.6349 70.0193 75.0673C70.0267 75.2451 70.2879 75.3232 70.4155 75.1864C72.9711 72.4411 91.117 69.667 97.5083 71.1371C98.0932 71.2718 98.5376 70.6948 98.1671 70.2779C94.9925 66.708 88.7173 65.2439 83.8911 65.4716"
                    fill="#d4c08c"
                    fillRule="evenodd"
                    opacity="1"
                    stroke="none"
                  />
                </g>
              </g>
              <g opacity="1">
                <g opacity="1">
                  <use
                    fill="#d3c191"
                    fillRule="evenodd"
                    opacity="1"
                    stroke="none"
                    xlinkHref="#Fill_6"
                  />
                  <clipPath clipRule="evenodd" id="ClipPath_10">
                    <use xlinkHref="#Fill_6" />
                  </clipPath>
                  <g clipPath="url(#ClipPath_10)">
                    <path
                      d="M-10.1-15L229.007-15L229.007-15L229.007 237.406L229.007 237.406L-10.1 237.406L-10.1 237.406L-10.1-15L-10.1-15Z"
                      fill="#d4c08c"
                      fillRule="evenodd"
                      opacity="1"
                      stroke="none"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
