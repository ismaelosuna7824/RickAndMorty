import { useEffect, useState } from "react";

export const useCustomState = (navigation: any, defaultValue: any) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        return navigation.addListener("focus", () => {
            setValue(defaultValue);
        });
    }, [navigation]);

    return [value, setValue];
};