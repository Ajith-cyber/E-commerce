import React from "react";

export default function Footer() {
    const today = new Date();
    return (
        <footer className="py-1">
            <p className="text-center text-dark mt-1">
                &copy; {today.getFullYear()} Designed by AjithKumar
               
            </p>
        </footer>
    )
}