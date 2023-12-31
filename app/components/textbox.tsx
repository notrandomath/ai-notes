import React from "react";
import { Children, ReactNode } from "react";

export default function TextBox({children}: {children: ReactNode}) {
    return (
        <div className="w-[80%] border-2 border-gray-400 p-[20px]">
            <ul>
                {Children.map(children, (child: ReactNode) => {
                    if (React.isValidElement(child) && child.type === 'p') {
                        // Wrap the <p> element in an <li>
                        return <li>{child}</li>;
                    }
                    
                    // Return the original child if no modification is needed
                    return child;
                })}
            </ul>
        </div>
    )
}
