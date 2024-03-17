export default function Cat(props: {
  className: string,
  eyesColor: string
}) {
  const { className, eyesColor } = props;
  return (
    <svg
      className={className}
      height="100%"
      strokeMiterlimit="10"
      style={{
        fillRule: 'nonzero', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round',
      }}
      version="1.1"
      viewBox="0 0 512 426.87"
      width="100%"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>cat</title>
      <g id="Cat">
        <path d="M430.18 273.221C422.124 273.221 415.59 266.689 415.59 258.631C415.59 250.573 422.123 244.041 430.18 244.041C454.632 244.041 474.525 224.146 474.525 199.694C474.525 175.242 454.632 155.347 430.18 155.347C389.637 155.347 356.653 122.363 356.653 81.82C356.653 41.277 389.636 8.29301 430.18 8.29301C438.237 8.29301 444.77 14.825 444.77 22.883C444.77 30.94 438.238 37.473 430.18 37.473C405.726 37.473 385.833 57.368 385.833 81.82C385.833 106.272 405.725 126.167 430.18 126.167C470.721 126.167 503.706 159.151 503.706 199.693C503.706 240.237 470.721 273.221 430.18 273.221Z" fill="#484848" fillRule="nonzero" opacity="1" stroke="none" />
        <path d="M91.229 277.539C73.569 277.539 59.256 291.853 59.256 309.511L59.256 375.95L29.655 375.95C17.886 375.95 8.343 385.491 8.343 397.263L8.343 408.956C8.343 414.269 12.649 418.576 17.965 418.576L101.888 418.576C113.659 418.576 123.2 409.035 123.2 397.263L123.2 309.51C123.199 291.853 108.885 277.539 91.229 277.539Z" fill="#484848" fillRule="nonzero" opacity="1" stroke="none" />
        <path d="M354.795 175.69L78.74 175.69L78.74 316.227C78.74 369.091 121.594 411.945 174.457 411.945L354.795 411.945L354.795 411.264C419.849 411.264 472.583 358.529 472.583 293.477C472.583 228.424 419.848 175.69 354.795 175.69Z" fill="#808080" fillRule="nonzero" opacity="1" stroke="none" />
        <g opacity="1">
          <path d="M230.484 175.69L230.484 244.95C230.484 258.059 241.111 268.686 254.22 268.686C267.329 268.686 277.958 258.059 277.958 244.95L277.958 175.69L230.484 175.69Z" fill="#cccccc" fillRule="nonzero" opacity="1" stroke="none" />
          <path d="M313.063 175.69L313.063 244.95C313.063 258.059 323.69 268.686 336.798 268.686C349.909 268.686 360.536 258.059 360.536 244.95L360.536 175.69L313.063 175.69Z" fill="#cccccc" fillRule="nonzero" opacity="1" stroke="none" />
        </g>
        <g opacity="1">
          <path d="M366.465 255.27C321.371 255.27 284.811 291.828 284.811 336.923C284.811 351.059 288.405 364.355 294.727 375.95L286.118 375.95C274.348 375.95 264.805 385.491 264.805 397.263L264.805 408.956C264.805 414.269 269.111 418.576 274.427 418.576L366.466 418.576C411.561 418.576 448.12 382.019 448.12 336.922C448.119 291.828 411.56 255.27 366.465 255.27Z" fill="#808080" fillRule="nonzero" opacity="1" stroke="none" />
          <path d="M198.833 277.539C181.173 277.539 166.861 291.853 166.861 309.511L166.861 375.95L137.26 375.95C125.489 375.95 115.947 385.491 115.947 397.263L115.947 408.956C115.947 414.269 120.253 418.576 125.568 418.576L209.491 418.576C221.262 418.576 230.803 409.035 230.803 397.263L230.803 309.51C230.803 291.853 216.489 277.539 198.833 277.539Z" fill="#808080" fillRule="nonzero" opacity="1" stroke="none" />
        </g>
        <path d="M19.4375 15.4038C13.2885 15.4038 8.28125 20.3787 8.28125 26.5288L8.28125 160.904C8.28125 194.601 22.6557 227.021 45.5 250.372C66.0971 229.35 93.5685 215.67 123.938 215.435C154.985 215.194 183.209 229.024 204.281 250.529C227.216 227.166 241.656 194.677 241.656 160.904L241.656 79.935L241.656 26.5288C241.656 20.3788 236.681 15.4037 230.531 15.4038C227.6 15.4038 224.925 16.5195 222.938 18.3725L180.531 60.7788C164.63 50.1588 145.526 43.9662 124.969 43.9663C104.412 43.9663 85.3073 50.1587 69.4062 60.7788L27 18.3725C25.012 16.5215 22.3685 15.4037 19.4375 15.4038Z" fill="#808080" fillRule="nonzero" opacity="1" stroke="none" />
        <path d="M123.938 215.435C93.5685 215.67 66.0971 229.35 45.5 250.372C66.3417 271.677 94.2248 285.435 124.969 285.435C155.636 285.435 183.456 271.743 204.281 250.529C183.209 229.024 154.985 215.194 123.938 215.435Z" fill="#cccccc" fillRule="nonzero" opacity="1" stroke="none" />
        <path d="M148.066 158.388L101.88 158.388C87.839 158.388 76.456 169.772 76.456 183.814C76.456 197.856 87.839 209.239 101.88 209.239C112.138 209.239 120.953 203.153 124.974 194.407C128.995 203.153 137.81 209.239 148.067 209.239C162.108 209.239 173.493 197.856 173.493 183.814C173.493 169.772 162.108 158.388 148.066 158.388Z" fill="#484848" fillRule="nonzero" opacity="1" stroke="none" />
        <path d="M139.384 175.327C132.081 182.899 119.917 183.115 112.352 175.809L103.913 167.66C96.346 160.354 98.76 154.376 109.279 154.376L140.464 154.376C150.981 154.376 153.613 160.571 146.312 168.143L139.384 175.327Z" fill="#502020" fillRule="nonzero" opacity="1" stroke="none" />
        <path d="M124.974 43.969C116.793 43.969 108.849 44.973 101.237 46.823L101.237 79.584C101.237 92.693 111.864 103.32 124.974 103.32C138.084 103.32 148.71 92.693 148.71 79.584L148.71 46.823C141.097 44.973 133.155 43.969 124.974 43.969Z" fill="#484848" fillRule="nonzero" opacity="1" stroke="none" />
        <path d="M57.8125 124.406C51.3845 124.406 46.1562 129.633 46.1562 136.062C46.1552 142.491 51.3836 147.687 57.8125 147.688C64.2405 147.688 69.4375 142.49 69.4375 136.062C69.4375 129.633 64.2405 124.406 57.8125 124.406ZM192.156 124.406C185.725 124.406 180.5 129.633 180.5 136.062C180.501 142.491 185.726 147.687 192.156 147.688C198.583 147.688 203.782 142.49 203.781 136.062C203.781 129.633 198.582 124.406 192.156 124.406Z" fill={eyesColor} fillRule="nonzero" opacity="1" stroke="none" />
        <path d="M430.188 0C385.071 0 348.344 36.6965 348.344 81.8125C348.344 126.929 385.071 163.656 430.188 163.656C450.066 163.656 466.219 179.807 466.219 199.688C466.219 207.897 463.478 215.663 458.531 221.938C435.758 189.02 397.748 167.406 354.781 167.406L249.781 167.406C249.893 165.237 249.938 163.075 249.938 160.906L249.938 79.9375C249.938 79.8605 249.939 79.7635 249.938 79.6875L249.938 26.5312C249.938 15.8182 241.243 7.125 230.531 7.125C225.6 7.125 220.887 8.9535 217.281 12.3125C217.209 12.3795 217.132 12.4613 217.062 12.5312L179.312 50.2812C162.83 40.7142 144.188 35.6875 124.969 35.6875C105.748 35.6875 87.106 40.7143 70.625 50.2812L32.875 12.5312C32.805 12.4613 32.7283 12.3805 32.6562 12.3125C29.0502 8.9535 24.3665 7.125 19.4375 7.125C8.7245 7.125 0 15.8202 0 26.5312L0 160.875C0 194.114 13.2437 227.686 36.3438 252.938C45.4828 262.926 55.7003 271.189 66.6562 277.625C56.9092 285.13 50.9688 296.794 50.9688 309.5L50.9688 367.656L29.6562 367.656C13.3302 367.656 0.0625025 380.924 0.0625 397.25L0.0625 408.969C0.0625 418.847 8.08975 426.875 17.9688 426.875L101.875 426.875C106.619 426.875 111.221 425.763 115.344 423.656C118.247 425.684 121.762 426.875 125.562 426.875L209.5 426.875C216.563 426.875 223.031 424.393 228.125 420.25L260.531 420.25C263.819 424.292 268.833 426.875 274.438 426.875L366.469 426.875C399.793 426.875 428.928 408.652 444.469 381.656L444.688 381.875C468.022 358.15 480.875 326.751 480.875 293.469C480.875 284.084 479.83 274.931 477.875 266.125C499.344 250.739 512 226.336 512 199.688C512 154.571 475.304 117.875 430.188 117.875C410.307 117.875 394.125 101.692 394.125 81.8125C394.125 61.9325 410.307 45.7813 430.188 45.7812C442.806 45.7812 453.062 35.493 453.062 22.875C453.062 10.257 442.806 0 430.188 0ZM430.188 16.5938C433.66 16.5938 436.469 19.403 436.469 22.875C436.469 26.346 433.66 29.1875 430.188 29.1875C401.16 29.1875 377.531 52.7865 377.531 81.8125C377.531 110.839 401.161 134.469 430.188 134.469C466.156 134.469 495.406 163.717 495.406 199.688C495.404 218.955 487.103 236.758 472.781 249.062C471.203 244.883 469.433 240.801 467.438 236.844C477.287 227.018 482.813 213.827 482.812 199.688C482.812 170.661 459.212 147.062 430.188 147.062C394.218 147.062 364.938 117.782 364.938 81.8125C364.938 45.8425 394.217 16.5938 430.188 16.5938ZM19.4375 23.6875C20.3015 23.6875 20.9013 24.045 21.2812 24.375L63.5625 66.6562C66.3615 69.4543 70.7393 69.8825 74.0312 67.6875C89.1383 57.5965 106.741 52.25 124.969 52.25C143.195 52.25 160.829 57.5975 175.938 67.6875C179.226 69.8845 183.607 69.4563 186.406 66.6562L228.656 24.375C229.035 24.044 229.665 23.6875 230.531 23.6875C232.096 23.6875 233.375 24.9652 233.375 26.5312L233.375 79.9375C233.375 80.0145 233.373 80.0803 233.375 80.1562L233.375 160.875C233.375 190.019 221.712 219.489 201.375 241.719C180.484 264.555 153.337 277.125 124.969 277.125C96.5987 277.127 69.4838 264.555 48.5938 241.719C28.2567 219.488 16.5937 190.019 16.5938 160.875L16.5938 26.5312C16.5938 24.9652 17.8725 23.6875 19.4375 23.6875ZM109.281 146.094C97.5502 146.094 93.497 151.761 92.125 155.156C90.754 158.551 89.7162 165.477 98.1562 173.625L106.594 181.781C111.716 186.726 118.473 189.437 125.625 189.438C133.149 189.438 140.145 186.485 145.344 181.094L152.281 173.906C160.359 165.528 159.131 158.584 157.688 155.188C156.244 151.791 152.106 146.094 140.469 146.094L109.281 146.094ZM110.688 162.656L140.062 162.656L133.406 169.562C131.361 171.682 128.605 172.844 125.625 172.844C122.795 172.844 120.137 171.787 118.125 169.844L110.688 162.656ZM45.7812 168.531C41.3452 168.531 37.668 172.03 37.5 176.5C37.326 181.077 40.8917 184.953 45.4688 185.125L86.5 186.656C86.608 186.66 86.7065 186.687 86.8125 186.688C91.2485 186.688 94.9258 183.158 95.0938 178.688C95.2678 174.11 91.702 170.266 87.125 170.094L46.0938 168.531C45.9857 168.528 45.8883 168.531 45.7812 168.531ZM203.844 168.531L162.812 170.094C158.234 170.266 154.669 174.111 154.844 178.688C155.012 183.158 158.688 186.687 163.125 186.688C163.231 186.688 163.329 186.66 163.438 186.656L204.469 185.125C209.046 184.951 212.611 181.077 212.438 176.5C212.264 171.923 208.435 168.361 203.844 168.531ZM247.844 183.969L354.812 183.969C415.189 183.969 464.281 233.095 464.281 293.469C464.279 307.758 461.549 321.651 456.344 334.531C455.067 286.04 415.263 246.969 366.469 246.969C316.871 246.969 276.531 287.34 276.531 336.938C276.531 347.539 278.408 358.052 282.031 367.938C267.636 369.937 256.5 382.314 256.5 397.25L256.5 403.656L238.406 403.656C238.86 401.598 239.094 399.442 239.094 397.25L239.094 309.5C239.094 287.298 221.045 269.25 198.844 269.25C197.751 269.25 196.665 269.289 195.594 269.375C201.951 264.553 207.971 259.085 213.594 252.938C231.331 233.548 243.26 209.244 247.844 183.969ZM90.4688 187.844C89.4022 187.995 88.356 188.379 87.375 188.969L53.9062 209.062C49.9782 211.421 48.7035 216.511 51.0625 220.438C52.6175 223.028 55.3403 224.469 58.1562 224.469C59.6093 224.469 61.1015 224.083 62.4375 223.281L95.9062 203.188C99.8343 200.829 101.109 195.739 98.75 191.812C96.9807 188.866 93.6683 187.391 90.4688 187.844ZM157.062 187.844C154.698 188.206 152.513 189.603 151.188 191.812C148.828 195.74 150.104 200.83 154.031 203.188L187.531 223.281C188.867 224.084 190.327 224.469 191.781 224.469C194.598 224.469 197.352 223.028 198.906 220.438C201.264 216.51 199.991 211.421 196.062 209.062L162.562 188.969C161.581 188.379 160.535 187.995 159.469 187.844C158.669 187.731 157.851 187.723 157.062 187.844ZM366.469 263.562C406.92 263.562 439.813 296.487 439.812 336.938C439.814 377.388 406.919 410.281 366.469 410.281L274.438 410.281C273.705 410.281 273.094 409.7 273.094 408.969L273.094 397.25C273.094 390.072 278.946 384.25 286.125 384.25L294.719 384.25C297.646 384.25 300.35 382.704 301.844 380.188C303.337 377.67 303.4 374.539 302 371.969C296.174 361.285 293.094 349.189 293.094 336.938C293.094 296.487 326.018 263.563 366.469 263.562ZM198.844 285.844C211.899 285.844 222.5 296.444 222.5 309.5L222.5 397.25C222.5 404.429 216.678 410.281 209.5 410.281L125.562 410.281C124.83 410.281 124.25 409.7 124.25 408.969L124.25 397.25C124.25 390.072 130.071 384.25 137.25 384.25L166.875 384.25C171.457 384.25 175.156 380.517 175.156 375.938L175.156 309.5C175.156 296.444 185.788 285.844 198.844 285.844ZM166.219 285.906C161.404 292.54 158.562 300.695 158.562 309.5L158.562 367.656L137.25 367.656C127.714 367.657 119.229 372.197 113.812 379.219C96.6815 362.794 87.0312 340.328 87.0312 316.219L87.0312 287.156C99.1963 291.479 111.955 293.719 124.969 293.719C139.171 293.719 153.068 291.037 166.219 285.906ZM70.4375 298.156L70.4375 316.219C70.4375 347.337 83.9655 376.134 107.688 395.969C107.668 396.398 107.656 396.815 107.656 397.25L107.656 408.938C105.882 409.816 103.905 410.281 101.875 410.281L17.9688 410.281C17.2367 410.281 16.625 409.7 16.625 408.969L16.625 397.25C16.625 390.072 22.4773 384.25 29.6562 384.25L59.25 384.25C63.832 384.25 67.5625 380.517 67.5625 375.938L67.5625 309.5C67.5625 305.44 68.5795 301.564 70.4375 298.156Z" fill="#282c34" fillRule="nonzero" opacity="1" stroke="none" />
      </g>
    </svg>
  );
}
