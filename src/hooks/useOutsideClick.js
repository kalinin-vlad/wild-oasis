import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCupturing = true) {
    const ref = useRef();

    useEffect(
        function () {
            function handleClick(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    console.log("Click outside");
                    handler();
                }
            }

            document.addEventListener("click", handleClick, listenCupturing);

            return () => document.removeEventListener("click", handleClick, listenCupturing);
        },
        [handler, listenCupturing]
    );

    return ref;
}