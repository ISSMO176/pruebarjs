import React from "react";

const NavBar = () => {
    const links= [
        {
            id : 1,
            link : "Home",
        },
        {
            id : 2,
            link : "Services",
        },
        {
            id : 3,
            link : "HowWeWork",
        },
        {
            id : 4,
            link : "Benefits",
        }
    ]
    return <div>
        <ul>
            {links.map(x =>(
                <div>
                    <link>{x.link === "HowWeWork" ? "How we Work" : x.link}</link>
                </div>
            ))}
        </ul>
    </div>;
}
export default NavBar;