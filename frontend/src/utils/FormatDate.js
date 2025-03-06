export const formatDate = (str) => {
    const date = new Date(str);
    return date
        .toLocaleString("en-IN", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        })
        .replace(",", "");
};
