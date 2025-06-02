import { useEffect, useState } from "react";

const useOnline = () => {
    const [online, setOnline] = useState<null | boolean>(null);

    const onlineFun = () => {
        setOnline(true);
    };

    const offlineFun = () => {
        setOnline(false);
    };

    useEffect(() => {
        setOnline(navigator.onLine);
        window.addEventListener("online", onlineFun);
        window.addEventListener("offline", offlineFun);
        return () => {
            window.removeEventListener("online", onlineFun);
            window.removeEventListener("offline", offlineFun);
        };
    }, []);

    return {
        online,
    };
};

export default useOnline;
