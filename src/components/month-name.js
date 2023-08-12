export function getMonthName(monthNumber) {
    const monthNames = [
        "januari", "februari", "maart", "april", "mei", "juni",
        "juli", "augustus", "september", "oktober", "november", "december"
    ];

    if (monthNumber >= 1 && monthNumber <= 12) {
        return monthNames[monthNumber - 1];
    } else {
        return "Ongeldige maandnummer";
    }
}