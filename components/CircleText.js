const CircleText = ({text="Text rotating around a circle path with SVG!"}) => {
    return ( 
        <div id="circle">
            <svg version="1.1" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" >
                <defs>
                    <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="100" r="75" fill="none"/>
                <g>
                    <use fill="none"/>
                    <text fill="#fff">
                        <textPath href="#circlePath" fontFamily="Monument">{text}</textPath>
                    </text>
                </g>
            </svg>
        </div>
     );
}
 
export default CircleText;