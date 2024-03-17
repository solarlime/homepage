export default function HookAndRope(props: {
  className: string,
  ropeColor: string
  hookColor: string
}) {
  const { className, ropeColor, hookColor } = props;
  return (
    <svg
      className={className}
      strokeMiterlimit="10"
      style={{
        fillRule: 'nonzero', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round',
      }}
      version="1.1"
      viewBox="0 0 150 56"
      width="100%"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Слой-1">
        <g opacity="1">
          <path d="M75 55L1 55L38 30L75 5L112 30L149 55L75 55Z" fill="transparent" stroke={ropeColor} strokeWidth="2" />
          <path d="M70 5C70 2.23858 72.2386 1.42109e-14 75 1.42109e-14C77.7614 1.42109e-14 80 2.23858 80 5C80 7.76142 77.7614 10 75 10C72.2386 10 70 7.76142 70 5Z" fill={hookColor} fillRule="nonzero" opacity="1" stroke="none" />
        </g>
      </g>
    </svg>
  );
}
